import path from 'path';
import config from '../config/config';
import { renameFileName, generateUserPictureName } from '../utils/file';
import { PICTURES_DIR, MEDICAL_DOCS_DIR, ATTESTATION_DOCS_DIR } from '../constants';
import { DocumentType } from '../../generated/prisma';
import sharp from 'sharp'; // Import the sharp library
import { removeFileSafe } from '../utils/file';
import fs from 'fs/promises';

export const fileService = {
    async storeProfilePicture(
        userId: number,
        pictureFile: Express.Multer.File
    ): Promise<{ filePath: string; url: string }> {
        const newFileName =
            generateUserPictureName(userId, pictureFile.originalname).replace(/\.[^/.]+$/, '') +
            '.webp';
        const tempOptimizedPath = pictureFile.path + '-optimized.webp';
        const finalFilePath = path.join(PICTURES_DIR, newFileName);

        await sharp(pictureFile.path)
            .resize({ width: 800, height: 800, fit: 'cover' }) // Resize to a max of 800x800
            .webp({ quality: 80 }) // Convert to WebP format with 80% quality
            .toFile(tempOptimizedPath); // Save the optimized image temporarily

        try {
            const stats = await fs.stat(tempOptimizedPath);
            console.log('✅ DEBUG: Optimized file details:', {
                filename: newFileName,
                path: finalFilePath,
                size_bytes: stats.size,
                size_kb: (stats.size / 1024).toFixed(2) + ' KB',
            });
        } catch (err) {
            console.error('DEBUG: Could not get stats for optimized file.', err);
        }
        // Move the optimized file to its final destination
        await renameFileName(tempOptimizedPath, finalFilePath);

        // Clean up the original temporary file
        await removeFileSafe(pictureFile.path);

        const pictureUrl = `${config.baseUrl}/uploads/pictures/${newFileName}`;
        return { filePath: finalFilePath, url: pictureUrl };
    },

    async storeDocument(
        userId: number,
        documentFile: Express.Multer.File,
        type: DocumentType
    ): Promise<{ filePath: string; url: string }> {
        // PDF and other document handling remains the same
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

        const newDocName = `${userId}-${Date.now()}-${documentFile.originalname.replace(/\s/g, '_')}`;
        const newDocPath = path.join(destinationDir, newDocName);
        await renameFileName(documentFile.path, newDocPath);
        const documentUrl = `${config.baseUrl}/uploads/${baseUrlPath}/${newDocName}`;

        return { filePath: newDocPath, url: documentUrl };
    },
    /**
     * Deletes an old profile picture, then optimizes and stores a new one.
     * @param userId - The ID of the user.
     * @param newPictureFile - The newly uploaded file.
     * @param oldPictureUrl - The URL of the old picture to be deleted.
     * @returns The public URL of the newly saved picture.
     */
    async updateProfilePicture(
        userId: number,
        newPictureFile: Express.Multer.File,
        oldPictureUrl: string | null
    ): Promise<{ filePath: string; url: string }> {
        if (oldPictureUrl) {
            try {
                const oldFileName = path.basename(new URL(oldPictureUrl).pathname);
                const oldFilePath = path.join(PICTURES_DIR, oldFileName);
                await removeFileSafe(oldFilePath);
            } catch (err) {
                console.error(
                    `Failed to delete old picture file for user ${userId}: ${oldPictureUrl}`,
                    err
                );
            }
        }

        const { filePath, url } = await this.storeProfilePicture(userId, newPictureFile);

        return { filePath, url };
    },
};
