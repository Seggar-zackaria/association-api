import multer from 'multer';
import path from 'path';
import type { Request } from 'express';
import { UPLOAD_DIR as TEMP_UPLOAD_DIR } from '../constants';

const storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb) => {
        cb(null, TEMP_UPLOAD_DIR);
    },
    filename: (req: Request, file: Express.Multer.File, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const allowedMimeTypes = /jpeg|jpg|png|pdf/;

    const isValid = allowedMimeTypes.test(file.mimetype);

    if (isValid) {
        cb(null, true);
    } else {
        cb(
            new Error(
                'Invalid file type. Only images (JPEG, PNG, GIF) and documents (PDF) are allowed.'
            )
        );
    }
};

export const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 10,
    },
});
export const registerationUpload = upload.fields([
    { name: 'picture', maxCount: 1 },
    { name: 'medicalCertificate', maxCount: 1 },
    { name: 'attestation', maxCount: 1 },
]);
