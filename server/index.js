import express from "express"
import { config } from "dotenv"
import cors from "cors"
import { databaseConnection } from "./data/data.js"
config({ path: "./config/.env" })
databaseConnection()
const app = express()
app.use(cors())
app.listen(process.env.PORT, () =>
  console.log(`server is working on http://localhost:${process.env.PORT}`)
)
