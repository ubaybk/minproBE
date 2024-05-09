import express from 'express'

import { createTransactionController, getTransactionController, getIdTransactionController } from '../controller/transaction.controller';
import { adminGuard, verifyToken } from '../middlewares/auth.middleware';


const router = express.Router()

router.post("/",verifyToken,createTransactionController);
router.get("/", getTransactionController)
router.get("/:id", getIdTransactionController)




export default router
