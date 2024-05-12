import express from 'express'

import { createTransactionController, getTransactionController, getIdTransactionController } from '../controller/transaction.controller';
import { adminGuard, verifyToken } from '../middlewares/auth.middleware';


const router = express.Router()

router.post("/",verifyToken,createTransactionController);
router.get("/",verifyToken, getTransactionController)
router.get("/:id",verifyToken, getIdTransactionController)




export default router
