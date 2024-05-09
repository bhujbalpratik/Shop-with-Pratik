import mongoose from "mongoose"

const bagItemSchema = new mongoose.Schema({
  bag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bag",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  price: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
})

export const BagItems = mongoose.model("BagItems", bagItemSchema)
