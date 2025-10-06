import type { Request, Response, NextFunction } from 'express';

export interface AppError extends Error {
    status?: number;
    message: string;
}

export const errorHandler = (err: AppError, req: Request, res: Response, _next: NextFunction) => {
    res.status(err.status || 500).json({
        message: err.message || 'Internal error occurred',
    });
};
