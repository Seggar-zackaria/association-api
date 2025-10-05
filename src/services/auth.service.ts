import { db } from "../prisma";
import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";
import { InvalidCredentialsError, EmailNotVerifiedError } from "../errors/errors";
import config from "../config/config";
// --- CHANGE: Import Token and TokenType from Prisma ---
import { Users, Token, TokenType } from "../../generated/prisma";
import crypto from "crypto";
import { emailService } from "./email.service";

export const authService = {
    async login(email: string, password: string): Promise<{ token: string, user: Partial<Users> }> {
        const user = await db.users.findUnique({ where: { email } });

        if (!user) {
            throw new InvalidCredentialsError();
        }

        if (!user.email_verified_at) {
            // Check for a recent verification token to allow resending the email
            const verificationToken = await db.token.findFirst({
                where: {
                    user_id: user.id,
                    type: TokenType.EMAIL_VERIFICATION,
                    expires_at: { gt: new Date() }
                }
            });
            // If no valid token exists, a new one can be sent.
            // The error now includes a flag for the frontend.
            throw new EmailNotVerifiedError("Please verify your email.", !verificationToken);
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new InvalidCredentialsError();
        }

        const payload = { userId: user.id, email: user.email, role: user.role };
        const options: SignOptions = { expiresIn: config.jwtExpiresIn };

        const token = jwt.sign(payload, config.jwtSecret, options);

        const { password: _, ...userWithoutPassword } = user;
        return { token, user: userWithoutPassword };
    },

    /**
     * Generates a verification token, saves it to the new Token table, and sends the email.
     */
    async sendVerification(userId: number, userEmail: string) {
        const tokenValue = crypto.randomBytes(32).toString('hex');
        const expires = new Date(Date.now() + 3600000); // 1 hour from now

        // --- FIX: Create a record in the Token table instead of updating the User ---
        await db.token.create({
            data: {
                user_id: userId,
                type: TokenType.EMAIL_VERIFICATION,
                token: tokenValue,
                expires_at: expires,
            },
        });

        await emailService.sendVerificationEmail(userEmail, tokenValue);
    },

    /**
     * Verifies a user's email by finding the token in the Token table.
     */
    async verifyEmail(tokenValue: string): Promise<Users> {
        // --- FIX: Find the token in the Token table ---
        const token = await db.token.findUnique({
            where: {
                token: tokenValue,
                type: TokenType.EMAIL_VERIFICATION
            },
        });

        if (!token || token.expires_at < new Date()) {
            throw new InvalidCredentialsError('Token is invalid or has expired.');
        }

        // Once the token is validated, update the user
        const updatedUser = await db.users.update({
            where: { id: token.user_id },
            data: {
                email_verified_at: new Date(),
            },
        });

        // After successful verification, delete the token so it cannot be used again
        await db.token.delete({
            where: { id: token.id }
        });

        return updatedUser;
    }
};

