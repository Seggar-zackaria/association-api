import { Router } from 'express';
import { userController } from '../controllers/user.controller';
import { upload } from '../config/multer.config';
import { protect, authorize } from '../middleware/auth.middleware';

const router = Router();

router.get('/', protect, userController.getUsers);

router.get('/:id', protect, userController.getUserById);

router.patch(
    '/:id/picture',
    protect,
    upload.single('picture'),
    userController.uploadProfilePicture
);

router.get('/deactivated', protect, authorize('admin'), userController.getDeactivateUser);
router.patch('/:id/update', protect, authorize('admin'), userController.updateUser);
router.delete('/:id', protect, authorize('admin'), userController.deleteUser);

export default router;
