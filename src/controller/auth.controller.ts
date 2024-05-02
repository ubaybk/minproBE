import { Request, Response, NextFunction } from "express";
import { createRegisterAction, loginAction } from "../action/auth.action";

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

const loginController = async(req: Request, res: Response, next: NextFunction):Promise<void> => {
    try {
        const data = await loginAction(req.body)

        res.status(200).json({
            message: "Login Success Full", data
        })
    } catch (err) {
        next(err)
    }
}

export {createRegisterController, loginController}

