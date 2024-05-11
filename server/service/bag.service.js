import { Bag } from "../models/bag.model"
import { BagItems } from "../models/bagItem.model"

export const creatBag = async (user) => {
  const bag = new Bag({ user })
  const createdBag = await bag.save()
  return createdBag
}

export const findUserBag = async (userId) => {
  let bag = await Bag.findOne({ user: userId })
  let bagItems = await BagItems.find({ bag: bag._id }).populate("Products")
  bag.bagItems = bagItems

  let totalPrice = 0
  let totalDiscountedPrice = 0
  let totalItems = 0

  for (const bagItems of bag.bagItems) {
    totalPrice += bagItems.price
    totalDiscountedPrice += bagItems.price
    totalItems += bagItems.quantity
  }

  bag.totalPrice = totalPrice
  bag.totalDiscountedPrice = totalDiscountedPrice
  bag.discount = totalPrice - totalDiscountedPrice

  return bag
}

export const addBagItem = async (userId, req) => {}
