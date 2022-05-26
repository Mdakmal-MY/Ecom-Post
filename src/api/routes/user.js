import express from 'express';
const router = express.Router();
import * as userController from '../controller/userController.js';

router.get('/register', userController.register_get);

router.get('/login', userController.login_get);

router.get('/users', userController.user_get);

router.get('/logout', userController.logout_get);

router.post('/register', userController.register_post);

router.post('/login', userController.login_post);

export default router;