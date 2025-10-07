import { Prisma, DocumentType } from '../../generated/prisma';
import { fileService } from './file.service';

export const documentService = {
    /**
     * Stores a document file and creates a corresponding record in the database.
     * @returns The path of the newly saved file for potential cleanup on error.
     */
    async create(
        tx: Prisma.TransactionClient,
        userId: number,
        documentFile: Express.Multer.File,
        title: string,
        type: DocumentType
    ): Promise<string> {
        const { filePath, url } = await fileService.storeDocument(userId, documentFile, type);

        await tx.documents.create({
            data: {
                user_id: userId,
                title: title,
                file_path: url,
                document_type: type,
                uploaded_by_id: userId,
            },
        });

        return filePath;
    },
};
