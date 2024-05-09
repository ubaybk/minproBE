import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const dataValidation = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
       const error = validationResult(req)
       if (!error.isEmpty()) throw new Error(String(error.array()[0].msg))
        
        next()
    } catch (err) {
        next (err)
    }
}

export default dataValidation