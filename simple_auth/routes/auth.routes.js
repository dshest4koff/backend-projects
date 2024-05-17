import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import { check } from "express-validator";
import authMiddleware from "../middleware/auth.middleware.js";

const router = new Router();

router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min: 4, max: 10})
],AuthController.registration);
router.post('/login', AuthController.login);
router.get('/users', authMiddleware, AuthController.getUsers);

export default router;