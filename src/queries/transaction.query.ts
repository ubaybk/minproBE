import { PrismaClient } from "@prisma/client";
import { Transaction } from "@prisma/client";
import { ITransaction } from "../interfaces/transaction.interfaces";
const prisma = new PrismaClient

const createTransactionQuery = async (data: ITransaction) => {
    try {
        const {id_user, id_event, transactionDate, status, total} = data
        const transaction = await prisma.transaction.create({
            data: {
                id_user: Number(id_user),
                id_event: Number(id_event),
                transactionDate: new Date(transactionDate),
                status,
                total
            }
        })

        return transaction
    } catch (err) {
        throw err
    }
}

const getTransactionQuery = async ():Promise<ITransaction[]> => {
    try {
        
        const transaction = await prisma.transaction.findMany()

        return transaction
    } catch (err) {
        throw err
    }
}

const getIdTransactionQuery = async (id: number) => {
    try {
        const transaction = await prisma.transaction.findUnique({
            where: {
                id
            }
        })

        return transaction
    } catch (err) {
        throw err
    }
}

export {
    createTransactionQuery,
    getTransactionQuery,
    getIdTransactionQuery
}