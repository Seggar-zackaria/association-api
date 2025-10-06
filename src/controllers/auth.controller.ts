import { Request, Response } from "express";
import { authService } from "../services/auth.service";
import { LoginSchema } from "../models/auth.model";
import {EmailInUseError, InvalidCredentialsError, UserNotActiveError, EmailNotVerifiedError} from "../errors/errors";
import {cleanupUploadedFiles} from "../utils/cleanup";
import {DocumentType, Documents} from "../../generated/prisma";
import {CreateUserSchema, UserResponseSchema} from "../models/user.model";
import {userService, UserWithDocuments} from "../services/user.service";

export const authController = {
    async registerUser(req: Request, res: Response) {
        // The body now contains form data, so we need to handle the JSON payload for legal_guardian
        const body: any = { ...req.body };
        try {
            if (typeof body.legal_guardian === 'string') {
                body.legal_guardian = JSON.parse(body.legal_guardian);
            }
        } catch (e) {
            // If parsing fails, it will be caught by the Zod validation below
        }

        const parsed = CreateUserSchema.safeParse(body);

        if (!parsed.success) {
            // If validation fails, clean up any uploaded files
            await cleanupUploadedFiles(undefined, req.files as Record<string, Express.Multer.File[]>);
            return res.status(400).json({ errors: parsed.error.format() });
        }

        try {

            console.log('DEBUG: Received files:', req.files);

            const files = req.files as { [fieldname: string]: Express.Multer.File[] };
            const pictureFile = files?.['picture']?.[0];
            const medicalFile = files?.['medicalCertificate']?.[0];
            const attestationFile = files?.['attestation']?.[0];

            if (!medicalFile || !attestationFile) {
                // If files are missing, clean up whatever was uploaded
                await cleanupUploadedFiles(undefined, files);
                return res.status(400).json({
                    error: "Validation error",
                    issues: "Medical certificate and parental attestation are required."
                });
            }

            const user: UserWithDocuments = await userService.create(
                parsed.data,
                pictureFile,
                medicalFile,
                attestationFile
            );

            // Send verification email
            await authService.sendVerification(user.id, user.email);
            // Find the specific document URLs from the documents array
            const medicalCert = user.documents.find(
                (doc: Documents) => doc.document_type === DocumentType.MEDICAL_CERTIFICATE
            );
            const attestation = user.documents.find(
                (doc: Documents) => doc.document_type === DocumentType.PARENTAL_AUTHORIZATION
            );

            // Build the object that will be sent in the response
            const userForResponse = {
                ...user,
                medical_certificate_url: medicalCert?.file_path || null,
                attestation_url: attestation?.file_path || null,
            };
            // Parse the user data for the response
            const responseData = UserResponseSchema.parse(userForResponse);
            return res.status(201).json({
                message: 'Registration successful. Please check your email to verify your account',
                user: responseData
            });

        } catch (error) {
            // Clean up files in case of an error during user creation
            await cleanupUploadedFiles(undefined, req.files as Record<string, Express.Multer.File[]>);
            if (error instanceof EmailInUseError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.error(error);
            return res.status(500).json({ error: "Internal server error" });
        }
    },

    async login(req: Request, res: Response) {
        const validationResult = LoginSchema.safeParse(req.body);

        if (!validationResult.success) {
            return res.status(400).json({ errors: validationResult.error.format() });
        }

        try {
            const { email, password } = validationResult.data;
            const { token, user } = await authService.login(email, password);

            return res.status(200).json({
                message: "Login successful",
                token: token,
                user: { // Send back some non-sensitive user data
                    id: user.id,
                    email: user.email,
                    role: user.role,
                }
            });

        } catch (error) {
            // Updated to handle EmailNotVerifiedError
            if (error instanceof InvalidCredentialsError || error instanceof UserNotActiveError || error instanceof EmailNotVerifiedError) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.error(error);
            return res.status(500).json({ error: "An internal server error occurred." });
        }
    },

    async logout(req: Request, res: Response) {
        // This is a stateless logout. For a stateful logout, you would invalidate the token.
        return res.status(200).json({ message: "Logout successful" });
    },

    async verifyEmail(req: Request, res: Response) {
        try {
            const { token } = req.params;
            await authService.verifyEmail(token);

            // It's a good practice to redirect to a success page on the frontend
            return res.status(200).json({message: "Email verified successfully"});
        } catch (error: unknown) {
            if (error instanceof InvalidCredentialsError ) { // This catches token invalid or expired errors
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.error(error);
            // Redirect to a failure page on the frontend
            return res.status(500).json({ error: "Email verification failed" });
        }
    }
};