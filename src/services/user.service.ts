import { db } from '../prisma';
import { CreateUserDTO, UpdateUserDTO } from '../models/user.model';
import { isOperationFailedError, isUniqueConstraintError } from '../utils/prismaErrors';
import { removeFileSafe } from '../utils/file';
import { EmailInUseError, UserNotFoundError } from '../errors/errors';
import bcrypt from 'bcrypt';
import { Prisma, Users, DocumentType, UserRole } from '../../generated/prisma';
import { differenceInYears } from '../utils/date';
import { guardianService } from './guardian.service';
import { fileService } from './file.service';
import { documentService } from './document.service';

export type UserWithDocuments = Prisma.UsersGetPayload<{
    include: { documents: true };
}>;

export const userService = {
    async create(
        data: CreateUserDTO,
        pictureFile?: Express.Multer.File,
        medicalFile?: Express.Multer.File,
        attestationFile?: Express.Multer.File
    ): Promise<UserWithDocuments> {
        const { legal_guardian, ...userData } = data;
        const hashPassword = await bcrypt.hash(userData.password, 10);
        const permanentFilePaths: string[] = [];

        try {
            const user = await db.$transaction(async (tx: Prisma.TransactionClient) => {
                const { password: _, ...playerData } = userData;
                const player = await tx.users.create({
                    data: {
                        ...playerData,
                        password_hash: hashPassword,
                        role: UserRole.player,
                    },
                });

                const age = differenceInYears(new Date(), player.date_of_birth);
                if (age < 18 && legal_guardian) {
                    await guardianService.processGuardian(tx, legal_guardian, player);
                }

                if (pictureFile) {
                    const { filePath, url } = await fileService.storeProfilePicture(
                        player.id,
                        pictureFile
                    );
                    permanentFilePaths.push(filePath);
                    await tx.users.update({
                        where: { id: player.id },
                        data: { picture_url: url },
                    });
                }

                if (medicalFile) {
                    const path = await documentService.create(
                        tx,
                        player.id,
                        medicalFile,
                        'Medical Certificate',
                        DocumentType.MEDICAL_CERTIFICATE
                    );
                    permanentFilePaths.push(path);
                }
                if (attestationFile) {
                    const path = await documentService.create(
                        tx,
                        player.id,
                        attestationFile,
                        'Parental Authorization',
                        DocumentType.PARENTAL_AUTHORIZATION
                    );
                    permanentFilePaths.push(path);
                }

                return player;
            });

            const finalUserWithDocs = await db.users.findUnique({
                where: { id: user.id },
                include: { documents: true },
            });

            if (!finalUserWithDocs) throw new Error('Failed to retrieve created user.');

            return finalUserWithDocs;
        } catch (error: unknown) {
            //  file cleanup on any error
            await Promise.all(permanentFilePaths.map((p) => removeFileSafe(p)));
            if (pictureFile) await removeFileSafe(pictureFile.path);
            if (medicalFile) await removeFileSafe(medicalFile.path);
            if (attestationFile) await removeFileSafe(attestationFile.path);

            if (isUniqueConstraintError(error, 'email')) {
                throw new EmailInUseError();
            }
            throw error;
        }
    },

    findAll(): Promise<Users[]> {
        return db.users.findMany({
            where: { is_active: true },
        });
    },

    findAllDeactivate(): Promise<Users[]> {
        return db.users.findMany({
            where: { is_active: false },
        });
    },

    async findById(id: number): Promise<Partial<Users> | null> {
        return db.users.findFirst({
            where: { id, is_active: true },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                email: true,
                role: true,
            },
        });
    },

    async updateById(id: number, data: UpdateUserDTO): Promise<Users> {
        const cleanData: Prisma.UsersUpdateInput = {};

        const allowedFields: (keyof UpdateUserDTO)[] = [
            'first_name', 'last_name', 'date_of_birth', 'place_of_birth',
            'gender', 'address', 'phone_number', 'blood_type', 'nationality', 'is_active'
        ];

        for (const field of allowedFields) {
            if (data[field] !== undefined) {
                //@ts-nocheck
                (cleanData[field as keyof Prisma.UsersUpdateInput]) = data[field] as any;
            }
        }

        if (data.password) {
            cleanData.password_hash = await bcrypt.hash(data.password, 10);
        }

        try {
            return await db.users.update({
                where: { id },
                data: cleanData,
            });
        } catch (error) {
            if (isOperationFailedError(error)) {
                throw new UserNotFoundError();
            }
            if (isUniqueConstraintError(error, 'email')) {
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
                    deleted_at: new Date(),
                    is_active: false,
                },
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

        try {
            const { url: newPictureUrl } = await fileService.updateProfilePicture(
                id,
                pictureFile,
                user.picture_url ?? null
            );

            return await db.users.update({
                where: { id },
                data: { picture_url: newPictureUrl },
            });
        } catch (error) {
            await removeFileSafe(pictureFile.path);
            if (isOperationFailedError(error)) {
                throw new UserNotFoundError();
            }
            throw error;
        }
    },
};
