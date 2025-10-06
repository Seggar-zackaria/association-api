import { removeFileSafe } from './file';

export async function cleanupUploadedFiles(
    file?: Express.Multer.File,
    files?: Record<string, Express.Multer.File[]>
): Promise<void> {
    try {
        if (file) {
            await removeFileSafe(file.path);
        } else if (files && typeof files === 'object' && !Array.isArray(files)) {
            for (const arr of Object.values(files)) {
                if (Array.isArray(arr)) {
                    for (const f of arr) {
                        await removeFileSafe(f.path);
                    }
                }
            }
        }
    } catch (err) {
        console.error('Error during file cleanup:', err);
    }
}
