// routes/auth.js
import express from 'express';
import { getCurrentUser } from '../controller/user.js';
import protect from '../middleware/authmiddleware.js';

const router = express.Router();

router.get('/me',protect, getCurrentUser);


export default router;
