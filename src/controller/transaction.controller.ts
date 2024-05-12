import { Request, Response, NextFunction } from "express";

import { createTransactionAction, getTransactionAction, getIdTransactionAction } from "../action/transaction.action";
import { ITransaction } from "../interfaces/transaction.interfaces";


const createTransactionController = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const data = await createTransactionAction (req.body)

        res.status(200).json({
            message: "Create Transaction Success", data
        })
        
    } catch (err) {
        next (err)
    }
}

const getTransactionController = async (req:Request, res:Response, next:NextFunction):Promise<void> => {
    try {
        
        const token = req.user;
        const data = await getTransactionAction(token)

        res.status(200).json({
            message: "Get Transaction Success", data})
    } catch (err) {
        throw err
    }
}

const getIdTransactionController = async (req:Request, res:Response, next:NextFunction):Promise <void> => {
    try {
        const {id} = req.params
        const data = await getIdTransactionAction(Number(id)) 

        res.status(200).json({
            message: "Get ID Transaction Success Full", data
        })
    } catch (err) {
        throw err
    }
}

export {
    createTransactionController,
    getTransactionController,
    getIdTransactionController
}