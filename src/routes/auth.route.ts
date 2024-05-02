import express from 'express'
import { createRegisterController, loginController  } from '../controller/auth.controller';

const router = express.Router()

router.post("/register", createRegisterController);
router.post("/login", loginController )


export default router
