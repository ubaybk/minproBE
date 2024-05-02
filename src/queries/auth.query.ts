import { PrismaClient, User } from "@prisma/client";
import { IUser } from "../interfaces/auth.interfaces";
const prisma = new PrismaClient()

const createRegisterQuery = async (data: User, pass: string) => {
    try {
        const t = await prisma.$transaction(async (prisma) => {
            try {
                const user = await prisma.user.create({
                    data: {
                        username: data.username,
                        email: data.email,
                        password: pass,
                        isVerified: data.isVerified,
                        roleId: data.roleId,
                        claimedCode: data.claimedCode,
                        point: data.point,
                        referralCode: data.referralCode

                    }
                }) 
                return user
            } catch (err) {
                throw err
            }
        })
        return t
    } catch (err) {
        throw err
    }
}

const loginQuery = async (data: IUser) => {
    try {
        const user = await prisma.user.findUnique({
            select:{
                id: true,
                username: true,
                email: true,
                role:{
                    select: {
                        name: true
                    },
                },
            },
            where: { email: data.email, password: data.password}
        })

        return user
    } catch (err) {
        throw err
        
    }
}


export {
    createRegisterQuery,
    loginQuery
}