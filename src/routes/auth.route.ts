import express from 'express'
import { createRegisterController, getRegisterController, loginController  } from '../controller/auth.controller';
import { adminGuard, verifyToken } from '../middlewares/auth.middleware';

const router = express.Router()

router.post("/register", createRegisterController);
router.get("/register",verifyToken, getRegisterController)

router.post("/login", loginController )



export default router
