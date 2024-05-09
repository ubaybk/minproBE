// untuk pengecekan USERNAME DAN EMAIL

import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client";


const prisma = new PrismaClient()

const getUserByEmailOrUsernameQuery = async (
    email: string,
    username: string
): Promise<User | null> => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    {
                        email: email
                    },
                    {
                        username: username
                    }
                ]
            }
        })
        return user
    } catch (err) {
        throw err
    }
}

const getUserByEmailByQuery = async (email: string)=> {
    try {
        const user = await prisma.user.findUnique({
            
            include: {
                role: true,
            },
            where: {
                email
            }
        })

        return user
    } catch (err) {
        throw err
    }
}

export { getUserByEmailOrUsernameQuery, getUserByEmailByQuery }