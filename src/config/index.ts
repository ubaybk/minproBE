import { config } from "dotenv"
config ({
    path: ".env",
})

export const {API_PORT, API_KEY} = process.env