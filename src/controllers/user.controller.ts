import {Request, Response} from "express";
import {userService} from "../services/user.service";
import {
    UpdateUserSchema,
    UserResponseSchema,
    UserArrayResponseSchema
} from "../models/user.model";
import {UserNotFoundError} from "../errors/errors";

export const userController = {

    async getUsers(req: Request, res: Response) {
        const users = await userService.findAll();
        const validationResult = UserArrayResponseSchema.safeParse(users);

        if (!validationResult.success) {
            return res.status(500).json({error: "Error formatting user data"});
        }

        return res.json(validationResult.data);
    },

    async getDeactivateUser(req: Request, res: Response) {
        const user = await userService.findAllDeactivate();
        const validationResult = UserArrayResponseSchema.safeParse(user);

        if (!validationResult.success) {
            return res.status(500).json({error: "Error formatting user data"});
        }
        return res.status(200).json(validationResult.data);
    },

    async getUserById(req: Request, res: Response) {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({message: "Invalid user ID"});
        }

        const user = await userService.findById(id);
        if (!user) {
            return res.status(404).json({message: "User not found"});
        }

        const safeUser = UserResponseSchema.parse(user);
        return res.json(safeUser);
    },

    async deleteUser(req: Request, res: Response) {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({message: "Invalid user ID"});
        }

        try {
            const user = await userService.deleteById(id);
            if (user) {

                return res.status(204).json({
                    success: true,
                    message: 'User deactivated successfully',
                });

            }
            return res.status(204).json({data: UserResponseSchema.parse(user)});
        } catch (error: unknown) {
            if (error instanceof UserNotFoundError) {
                return res.status(error.statusCode).json({error: error.message});
            }

            console.log(error);
            return res.status(500).json({error: "internal server error"});
        }
    },

    async updateUser(req: Request, res: Response) {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({message: "Invalid user ID"});
        }

        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({message: "Body is required"});
        }

        const validationResult = UpdateUserSchema.safeParse(req.body);
        if (!validationResult.success) {
            return res.status(400).json({errors: validationResult.error.format()});
        }

        try {
            const updatedUser = await userService.updateById(id, validationResult.data);

            const responseData = UserResponseSchema.parse(updatedUser);
            return res.status(200).json(responseData);

        } catch (error) {
            if (error instanceof UserNotFoundError) {
                return res.status(error.statusCode).json({error: error.message});
            }
            console.error(error);
            return res.status(500).json({error: "internal server error"});
        }


    },

    async uploadProfilePicture(req: Request, res: Response) {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({message: 'Invalid user ID'});
        }

        if (!req.file) {
            return res.status(400).json({error: 'No file was uploaded.'});
        }

        try {

            await userService.updatePictureUrl(id, req.file);

            return res.status(200).json({
                success: true,
                message: 'Profile picture uploaded successfully.',
                pictureUrl: req.file,
            });
        } catch (error) {
            if (error instanceof UserNotFoundError) {
                return res.status(error.statusCode).json({error: error.message});
            }

            console.error(error);
            return res.status(500).json({error: 'An internal server error occurred.'});
        }

    },
}
