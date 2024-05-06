import express from "express"
import { config } from "dotenv"
import cors from "cors"
import { databaseConnection } from "./data/data.js"
import userRouter from "./routes/user.routes.js"
import { errorMiddleware } from "./middlewares/error.middleware.js"
import cookieParser from "cookie-parser"

config({ path: "./config/.env" })

databaseConnection()
const app = express()
// middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())

// Routes
app.use("/api/users", userRouter)

app.use(errorMiddleware)
app.listen(process.env.PORT, () =>
  console.log(`server is working on http://localhost:${process.env.PORT}`)
)
