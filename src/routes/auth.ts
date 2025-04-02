import { verifyRefreshToken } from "../middleware/auth";
import express, { Router } from 'express';
import { clearToken, login, refreshToken, register } from "../controllers/authController";
const router: Router = express.Router();

router.post('/login', login);
router.post('/refresh-token', verifyRefreshToken, refreshToken);
router.post('/clear-token', clearToken);
router.post('/register', register);

export default router;