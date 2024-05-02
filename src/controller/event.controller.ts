import { Request, Response, NextFunction } from "express";
import { createEventAction } from "../action/event.action";





const createEventController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.user)
        const data = await createEventAction(req.body)

        res.status(200).json({
            message: "Create Register Success", data
        })
    } catch (err) {
        next (err)
    }
}


export {
    createEventController
}

