import { Router } from 'express';
import { authController } from '../controllers/auth.controller';
import { registerationUpload } from '../config/multer.config';
import { protect } from '../middleware/auth.middleware';

const router = Router();

router.post('/register', registerationUpload, authController.registerUser);
router.post('/login', authController.login);
router.post('/logout', protect, authController.logout);

router.get('/verify-email/:token', authController.verifyEmail);

export default router;
