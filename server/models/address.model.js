import mongoose from "mongoose"

const addressSchema = new mongoose.Schema({})

export const Address = mongoose.model("Address", addressSchema)
