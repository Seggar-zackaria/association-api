import fs from 'fs/promises';
import path from 'path';

/**
 * Safely delete a file if it exists.
 */
export async function removeFileSafe(filePath: string) {
    try {
        await fs.unlink(filePath);
    } catch {
        // ignore if missing
    }
}

/**
 * Generate a unique picture file name for a user.
 */
export function generateUserPictureName(userId: number | string, originalName: string) {
    return `user-${userId}-${Date.now()}${path.extname(originalName)}`;
}

export function renameFileName(filePath: string, newFilePath: string) {
    return fs.rename(filePath, newFilePath);
}
