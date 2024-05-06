import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "CUSTOMER",
  },
  mobile: {
    type: String,
  },
  address: [{ type: mongoose.Schema.Types.ObjectId, ref: "addresses" }],
  paymentInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: "paymentInfo" }],
  ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: "ratings" }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "reviews" }],
  createdAt: { type: Date, default: Date.now() },
})

export const User = mongoose.model("User", userSchema)
