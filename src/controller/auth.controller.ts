import { Request, Response, NextFunction } from "express";
import { createRegisterAction, getRegisterAction, loginAction } from "../action/auth.action";
import { get } from "http";


const createRegisterController= async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await createRegisterAction(req.body)

        res.status(200).json({
            message: "Create Register Success", data
        })
    } catch (err) {
        next (err)
    }
}

const getRegisterController = async (req:Request, res:Response, next:NextFunction):Promise<void> => {
    try {
        const token = req.user;
        const data = await getRegisterAction(token)

        res.status(200).json({
            message: "Get Register Success", data})
    } catch (err) {
        throw err
    }
}

const loginController = async(req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {
        const data = await loginAction(req.body)
        

        const newData = {
            userId: data.user.id,
            username: data.user.username,
            email: data.user.email,
            role: data.user.roleId,
            isVerify: data.user.isVerified,
            token: data.token
        }
        console.log ("ini data",newData)
        console.log(data)
       
        
        res.status(200).json({
            message: "Login Success Full", newData
        })
    } catch (err) {
        next(err)
    }
}



export {createRegisterController, loginController, getRegisterController}

