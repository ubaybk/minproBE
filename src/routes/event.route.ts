import express from 'express'
import { createEventController, getEventController, getIdEventController, updateEventController, deleteEventController } from '../controller/event.controller';
import { adminGuard, verifyToken } from '../middlewares/auth.middleware';
import { createEventValidator } from '../helpers/validator';
import dataValidation from '../middlewares/validator.middleware';

const router = express.Router()

router.post(
    "/",
    verifyToken,
    adminGuard,
    createEventValidator,
    dataValidation,
    createEventController);

router.get("/", getEventController)
router.get("/:id", getIdEventController)
router.patch("/:id", updateEventController)
router.delete("/:id", deleteEventController)




export default router
