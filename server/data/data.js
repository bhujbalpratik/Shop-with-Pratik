import mongoose from "mongoose"

export const databaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "shop" })
    .then(() => console.log(`Database connected`))
    .catch((e) => console.log(`Error while Database connection${e}`))
}
