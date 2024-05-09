import { User } from "@prisma/client";
import { IUser } from "../interfaces/auth.interfaces";
import { getUserByEmailByQuery, getUserByEmailOrUsernameQuery } from "../queries/user.query";
import { createRegisterQuery, loginQuery } from "../queries/auth.query";
import { genSalt, hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { API_KEY } from "../config";

const createRegisterAction = async (data: User) => {
    try {
        const check = await getUserByEmailOrUsernameQuery(data.email, data.username)
        if (check) throw new Error("User Already Exist")

        const salt = await genSalt(10)
        const hashPass = await hash(data.password, salt)

        const register = await createRegisterQuery(data, hashPass)

        return register
    } catch (err) {
        throw err
    }
}

const loginAction = async (data: IUser) => {
    try {

        const user = await getUserByEmailByQuery(data.email)

        if (!user) throw new Error("Email Doesnt exist")

        const isValid = await compare(data.password, user.password)

        if (!isValid) throw new Error("Password Is Wrong!")

        const payload = {
            userId: user.id,
            email: user.email,
            username: user.username,
            role: user.role.name
        } //isi JWT
        const token = sign(payload, String(API_KEY), { expiresIn: "1h" })


        // const user = await loginQuery(data)

        // if(!user) throw new Error("Password or Email Incorrect")

        return { user, token }
    } catch (err) {
        throw err
    }
}

export {
    createRegisterAction,
    loginAction, 

}

