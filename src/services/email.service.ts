import nodemailer from 'nodemailer';
import config from '../config/config';

const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: config.smtpPort === 465, // `secure:true` is required for port 465, false for all others
    auth: {
        user: config.smtpUser,
        pass: config.smtpPass,
    },
});

export const emailService = {
    /**
     * Sends a verification email to a new user.
     * @param to - The recipient's email address.
     * @param token - The verification token.
     */
    async sendVerificationEmail(to: string, token: string) {
        const verificationUrl = `${config.baseUrl}/api/auth/verify-email/${token}`;

        const mailOptions = {
            from: '"EHBAT Handball Club" <no-reply@ehbat.com>',
            to: to,
            subject: 'Please verify your email address',
            html: `
                <h1>Welcome to EHBAT Handball!</h1>
                <p>Thank you for registering. Please click the link below to verify your email address:</p>
                <a href="${verificationUrl}">${verificationUrl}</a>
                <p>This link will expire in 1 hour.</p>
            `,
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Verification email sent: %s', info.messageId);

            if (config.smtpHost === 'smtp.ethereal.email') {
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            }
        } catch (error) {
            console.error('Error sending verification email:', error);
        }
    },
};

