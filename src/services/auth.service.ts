import { db } from "../prisma";
import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";
import { InvalidCredentialsError, EmailNotVerifiedError } from "../errors/errors";
import config from "../config/config";
import { Users, TokenType } from "../../generated/prisma"; // Updated import
import crypto from "crypto";
import { emailService } from "./email.service";

export const authService = {
    async login(email: string, password: string): Promise<{ token: string, user: Partial<Users> }> {
        const user = await db.users.findUnique({ where: { email } });

        if (!user) {
            throw new InvalidCredentialsError();
        }

        if (!user.email_verified_at) {
            const verificationToken = await db.tokens.findFirst({ // FIX: token -> tokens
                where: {
                    user_id: user.id,
                    type: TokenType.EMAIL_VERIFICATION,
                    expires_at: { gt: new Date() }
                }
            });
            throw new EmailNotVerifiedError("Please verify your email.", !verificationToken);
        }

        const isPasswordValid = await bcrypt.compare(password, user.password_hash); // FIX: user.password -> user.password_hash
        if (!isPasswordValid) {
            throw new InvalidCredentialsError();
        }

        const payload = { userId: user.id, email: user.email, role: user.role };
        const options: SignOptions = { expiresIn: config.jwtExpiresIn };

        const token = jwt.sign(payload, config.jwtSecret, options);

        const { password_hash, ...userWithoutPassword } = user; // FIX: password -> password_hash
        return { token, user: userWithoutPassword };
    },

    async sendVerification(userId: number, userEmail: string) {
        const tokenValue = crypto.randomBytes(32).toString('hex');
        const expires = new Date(Date.now() + 3600000); // 1 hour from now

        await db.tokens.create({ // FIX: token -> tokens
            data: {
                user_id: userId,
                type: TokenType.EMAIL_VERIFICATION,
                token: tokenValue,
                expires_at: expires,
            },
        });

        await emailService.sendVerificationEmail(userEmail, tokenValue);
    },

    async verifyEmail(tokenValue: string): Promise<Users> {
        const token = await db.tokens.findUnique({ // FIX: token -> tokens
            where: {
                token: tokenValue,
                type: TokenType.EMAIL_VERIFICATION
            },
        });

        if (!token || token.expires_at < new Date()) {
            throw new InvalidCredentialsError('Token is invalid or has expired.');
        }

        const updatedUser = await db.users.update({
            where: { id: token.user_id },
            data: {
                email_verified_at: new Date(),
            },
        });

        await db.tokens.delete({
            where: { id: token.id }
        });

        return updatedUser;
    }
};