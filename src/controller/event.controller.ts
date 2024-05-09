import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { createEventAction, getEventAction, getIdEventAction, updateEventAction, deleteEventAction } from "../action/event.action";





const createEventController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
       

        const data = await createEventAction(req.body)

        res.status(200).json({
            message: "Create Register Success", data
        })
    } catch (err) {
        next(err)
    }
}

const getEventController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

        const filters = req.query
        const data = await getEventAction(filters)

        res.status(200).json({
            message: "Get Event Success", data
        })
    } catch (err) {
        next(err)
    }
}

const getIdEventController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params
        const data = await getIdEventAction(Number(id))

        res.status(200).json({
            message: "Get Id Event Success", data
        })
    } catch (err) {
        next(err)
    }
}

const updateEventController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params
        const filters = req.body

        const data = await updateEventAction(Number(id), filters)

        res.status(200).json({
            message: "Update Event Success Full", data
        })
    } catch (err) {
        next(err)
    }
}

const deleteEventController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;

        const data = await deleteEventAction(Number(id))

        res.status(200).json({
            message: "Delete Event Success", data
        })
    } catch (err) {
        next(err)
    }
}


export {
    createEventController,
    getEventController,
    getIdEventController,
    updateEventController,
    deleteEventController
}

