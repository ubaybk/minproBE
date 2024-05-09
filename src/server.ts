import express, { Application } from 'express'
import { API_PORT } from './config'

import registerRouter from "./routes/auth.route"
import eventRouter from "./routes/event.route"
import transactionRouter from "./routes/transaction.route"
import { ErrorMiddleware } from './middlewares/error.middleware'

const PORT: number = Number(API_PORT) || 8000

const app: Application = express()

app.use(express.json())

app.use("/auth", registerRouter)
app.use("/event", eventRouter)
app.use("/transaction", transactionRouter)
app.use(ErrorMiddleware)


app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`)
})
