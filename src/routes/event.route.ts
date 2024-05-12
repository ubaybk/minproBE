import express from 'express'
import { createEventController, getEventController, getIdEventController, updateEventController, deleteEventController } from '../controller/event.controller';
import { adminGuard, verifyToken } from '../middlewares/auth.middleware';
import { createEventValidator } from '../helpers/validator';
import dataValidation from '../middlewares/validator.middleware';
import { uploader } from '../helpers/multer';
import { addNewImage } from '../controller/event.controller';

const router = express.Router()

router.post(
    "/",
    verifyToken,
    adminGuard,
    uploader("IMG", "/imgEvent").single("avatar"),createEventController),
    createEventValidator,
    dataValidation
    

router.get("/", getEventController)
// router.post("/single",uploader("IMG", "/imgEvent").single("file"), addNewImage);
router.get("/:id", getIdEventController)
router.patch("/:id", updateEventController)
router.delete("/:id", deleteEventController)




export default router
