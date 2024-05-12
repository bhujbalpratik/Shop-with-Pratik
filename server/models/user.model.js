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
  address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
  paymentInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: "PaymentInfo" }],
  ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ratings" }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reviews" }],
  createdAt: { type: Date, default: Date.now() },
})

export const User = mongoose.model("User", userSchema)
