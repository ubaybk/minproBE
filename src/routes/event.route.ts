import express from 'express'
import { createEventController } from '../controller/event.controller';
import { adminGuard, verifyToken } from '../middlewares/auth.middleware';

const router = express.Router()

router.post(
    "/",
    verifyToken,
    adminGuard,
    createEventController);



export default router
