import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import { db } from '../prisma';
import { userRole } from '../../generated/prisma';


declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number;
                email: string;
                role: userRole;
            };
        }
    }
}

/**
 * Middleware to verify JWT and authenticate the user.
 * Attaches the user payload to the request object if the token is valid.
 */
export const protect = async (req: Request, res: Response, next: NextFunction) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, config.jwtSecret) as { userId: number, email: string, role: userRole };

            const user = await db.users.findUnique({ where: { id: decoded.userId } });

            if (user && user.is_active) {
                req.user = { id: user.id, email: user.email, role: user.role };
                next();
            } else {
                res.status(401).json({ message: 'Not authorized, user not found or inactive' });
            }
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token provided' });
    }
};

/**
 * Middleware factory to authorize users based on their roles.
 * @param {...userRole[]} roles - An array of roles that are allowed to access the route.
 * @returns An Express middleware function.
 */
export const authorize = (...roles: userRole[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({
                message: `Forbidden: User role '${req.user?.role}' is not authorized to access this route.`
            });
        }
        next();
    };
};

