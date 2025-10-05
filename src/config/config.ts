import dotenv from 'dotenv';

dotenv.config();

interface Config {
    port: number;
    nodeEnv: string;
    baseUrl: string;
    jwtSecret: string;
    jwtExpiresIn: number; // Changed from string to number

    smtpHost: string;
    smtpPort: number;
    smtpUser: string;
    smtpPass: string;
}

const port = Number(process.env.PORT) || 3000;

// 7 days in seconds (7 * 24 * 60 * 60 = 604800)
const jwtExpiresInSeconds = Number(process.env.JWT_EXPIRES_IN_SECONDS) || 604800;

const config: Config = {
    port: port,
    nodeEnv: process.env.NODE_ENV || 'development',
    baseUrl: process.env.BASE_URL || `http://localhost:${port}`,
    jwtSecret: process.env.JWT_SECRET || 'default-secret-key-that-is-very-insecure',
    jwtExpiresIn: jwtExpiresInSeconds,

    smtpHost: process.env.SMTP_HOST || 'smtp.ethereal.email',
    smtpPort: Number(process.env.SMTP_PORT) || 587,
    smtpUser: process.env.SMTP_USER || 'ladarius55@ethereal.email',
    smtpPass: process.env.SMTP_PASS || '9DEDTmu7TMpBU3funU',
};

export default config;

