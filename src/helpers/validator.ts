import { body} from "express-validator" //sama seperti YAP untuk validator  

const createEventValidator = [
    body("name").notEmpty().withMessage("Name is required!"),
    body("avatar").notEmpty().withMessage("avatar is required!"),
    body("dateStart").notEmpty().withMessage("dateEnd is required!"),
    body("dateEnd").notEmpty().withMessage("dateEnd is required!"),
    body("time").notEmpty().withMessage("Time is required!"),
    body("location").notEmpty().withMessage("Location is required!"),
    body("desc").notEmpty().withMessage("desc is required!"),
    body("categoryName").notEmpty().withMessage("categoryName is required!"),
    body("price").notEmpty().withMessage("price is required!"),
    body("quota").notEmpty().withMessage("quota is required!"),

]

export { createEventValidator}