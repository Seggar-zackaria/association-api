import { db } from "../prisma";
import { CreateUserDTO, UpdateUserDTO, CreateGuardianDTO } from "../models/user.model";
import { isOperationFailedError, isUniqueConstraintError } from "../utils/prismaErrors";
import { removeFileSafe, generateUserPictureName, renameFileName } from "../utils/file";
import { EmailInUseError, UserNotFoundError } from "../errors/errors";
import bcrypt from "bcrypt";
import path from "path";
import {DocumentType, Users, Documents, gender, $Enums} from "../../generated/prisma";
import type { Prisma } from "../../generated/prisma";
import config from "../config/config";
import { differenceInYears } from "../utils/date";
import { PICTURES_DIR, MEDICAL_DOCS_DIR, ATTESTATION_DOCS_DIR } from "../constants";
import userRole = $Enums.userRole;

export const userService = {

    async create(
        data: CreateUserDTO,
        pictureFile?: Express.Multer.File,
        medicalFile?: Express.Multer.File,
        attestationFile?: Express.Multer.File
    ): Promise<Users> {
        const hashPassword = await bcrypt.hash(data.password, 10);
        const { legal_guardian, ...userData } = data;
        const permanentFilePaths: string[] = [];

        try {
            const user = await db.$transaction(async (tx: Prisma.TransactionClient) => {
                let player = await tx.users.create({
                    data: {
                        ...userData,
                        password: hashPassword,
                        role: userRole.user  // player
                    },
                });

                const age = differenceInYears(new Date(), player.date_of_birth);

                if (age < 18 && legal_guardian) {
                    const guardianUser  = await tx.users.upsert({
                        where: { email: legal_guardian.email },
                        update: {},
                        create: {
                            first_name: legal_guardian.first_name,
                            last_name: legal_guardian.last_name,
                            email: legal_guardian.email,
                            phone_number: legal_guardian.phone_number,
                            password: await bcrypt.hash(legal_guardian.password, 10),
                            role: userRole.parent,
                            address: player.address,
                            date_of_birth: 'null',
                            place_of_birth: 'null',
                            gender: "woman",
                        }
                    });

                    await tx.playerRelationShips.create({
                        data: {
                            player_id: player.id,
                            legal_guardian_id: guardianUser.id,
                            relationship_type: legal_guardian.relation,
                        }
                    });
                }

                if (pictureFile) {
                    const newFileName = generateUserPictureName(player.id, pictureFile.originalname);
                    const newFilePath = path.join(PICTURES_DIR, newFileName);
                    await renameFileName(pictureFile.path, newFilePath);
                    permanentFilePaths.push(newFilePath);

                    const pictureUrl = `${config.baseUrl}/uploads/pictures/${newFileName}`;
                    player = await tx.users.update({
                        where: { id: player.id },
                        data: { picture_url: pictureUrl },
                    });
                }

                const documentsToCreate: Prisma.DocumentsCreateManyInput[] = [];
                const processDocument = async (file: Express.Multer.File, title: string, type: DocumentType) => {
                    let destinationDir: string;
                    let baseUrlPath: string;

                    if (type === DocumentType.MEDICAL_CERTIFICATE) {
                        destinationDir = MEDICAL_DOCS_DIR;
                        baseUrlPath = 'medical';
                    } else if (type === DocumentType.PARENTAL_AUTHORIZATION) {
                        destinationDir = ATTESTATION_DOCS_DIR;
                        baseUrlPath = 'attestation';
                    } else {
                        throw new Error(`Unsupported document type: ${type}`);
                    }

                    const newDocName = `${player.id}-${Date.now()}-${file.originalname.replace(/\s/g, '_')}`;
                    const newDocPath = path.join(destinationDir, newDocName);
                    await renameFileName(file.path, newDocPath);
                    permanentFilePaths.push(newDocPath);

                    documentsToCreate.push({
                        user_id: player.id,
                        title: title,
                        file_path: `${config.baseUrl}/uploads/${baseUrlPath}/${newDocName}`,
                        document_type: type,
                        uploaded_by:`${player.first_name} ${player.last_name}`,
                    });
                };

                if (medicalFile) {
                    await processDocument(medicalFile, 'Medical Certificate', DocumentType.MEDICAL_CERTIFICATE);
                }

                if (attestationFile) {
                    await processDocument(attestationFile, 'Parental Authorization', DocumentType.PARENTAL_AUTHORIZATION);
                }

                if (documentsToCreate.length > 0) {
                    await tx.documents.createMany({
                        data: documentsToCreate
                    });
                }

                return player;
            }, {
                timeout: 10000,
            });

            const finalUserWithDocs = await db.users.findUnique({
                where: { id: user.id },
                include: {
                    documents: true,
                },
            });

            if (!finalUserWithDocs) {
                throw new Error("Failed to retrieve created user after transaction.");
            }

            const medicalCert = finalUserWithDocs.documents.find(
                (doc: Documents) => doc.document_type === DocumentType.MEDICAL_CERTIFICATE
            );
            const attestation = finalUserWithDocs.documents.find(
                (doc: Documents) => doc.document_type === DocumentType.PARENTAL_AUTHORIZATION
            );

            const userForResponse = {
                ...finalUserWithDocs,
                medical_certificate_url: medicalCert?.file_path || null,
                attestation_url: attestation?.file_path || null,
            };

            return userForResponse as Users;

        } catch (error: unknown) {
            for (const filePath of permanentFilePaths) {
                await removeFileSafe(filePath);
            }
            if (pictureFile) await removeFileSafe(pictureFile.path);
            if (medicalFile) await removeFileSafe(medicalFile.path);
            if (attestationFile) await removeFileSafe(attestationFile.path);

            if (isUniqueConstraintError(error, "email")) {
                throw new EmailInUseError();
            }
            throw error;
        }
    },

    findAll(): Promise<Users[]> {
        return db.users.findMany({
            where: { is_active: true }
        });
    },

    findAllDeactivate(): Promise<Users[]> {
        return db.users.findMany({
            where: { is_active: false }
        });
    },

    findById(id: number): Promise<Users | null> {
        return db.users.findFirst({ where: { id, is_active: true } });
    },

    async updateById(id: number, data: UpdateUserDTO): Promise<Users> {
        const updateData: Prisma.UsersUpdateInput = { ...data };

        if (data.password) {
            updateData.password = await bcrypt.hash(data.password, 10);
        }

        try {
            return await db.users.update({
                where: { id },
                data: updateData
            });
        } catch (error) {
            if (isOperationFailedError(error)) {
                throw new UserNotFoundError();
            }
            if (isUniqueConstraintError(error, "email")) {
                throw new EmailInUseError();
            }
            throw error;
        }
    },

    async deleteById(id: number): Promise<Users> {
        try {
            return await db.users.update({
                where: { id },
                data: {
                    deletedAt: new Date(),
                    is_active: false,
                }
            });
        } catch (error: unknown) {
            if (isOperationFailedError(error)) {
                throw new UserNotFoundError();
            }
            throw error;
        }
    },

    async updatePictureUrl(id: number, pictureFile: Express.Multer.File): Promise<Users> {
        const user = await this.findById(id);
        if (!user) {
            await removeFileSafe(pictureFile.path);
            throw new UserNotFoundError();
        }

        if (user.picture_url) {
            try {
                const oldFileName = path.basename(new URL(user.picture_url).pathname);
                const oldFilePath = path.join(PICTURES_DIR, oldFileName);
                await removeFileSafe(oldFilePath);
            } catch (err) {
                console.error(`Failed to delete old picture file for user ${id}: ${user.picture_url}`, err);
            }
        }

        const newFileName = generateUserPictureName(id, pictureFile.originalname);
        const newFilePath = path.join(PICTURES_DIR, newFileName);

        try {
            await renameFileName(pictureFile.path, newFilePath);
            const newPictureUrl = `${config.baseUrl}/uploads/pictures/${newFileName}`;

            return await db.users.update({
                where: { id },
                data: { picture_url: newPictureUrl },
            });
        } catch (error) {
            await removeFileSafe(newFilePath);
            if (isOperationFailedError(error)) {
                throw new UserNotFoundError();
            }
            throw error;
        }
    },
};


