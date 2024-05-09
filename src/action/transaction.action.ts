import { Transaction } from "@prisma/client"
import { ITransaction } from "../interfaces/transaction.interfaces"
import { createTransactionQuery, getTransactionQuery, getIdTransactionQuery } from "../queries/transaction.query"


const createTransactionAction = async (data: ITransaction): Promise<Transaction> => {
    try {
        const transaction = await createTransactionQuery(data)

        return transaction
    } catch (err) {
        throw err
    }
}

const getTransactionAction = async ():Promise<ITransaction[]> => {
    try {
       const transaction = await getTransactionQuery()

       return transaction  
    } catch (err) {
        throw err
    }
}

const getIdTransactionAction = async (id: number):Promise <ITransaction | null> => {
    try {
        const transaction = await getIdTransactionQuery(id)

        return transaction
    } catch (err) {
        throw err
    }
}

export {
    createTransactionAction,
    getTransactionAction,
    getIdTransactionAction
}