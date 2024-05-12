import { Bag } from "../models/bag.model"
import { BagItems } from "../models/bagItem.model"
import { Product } from "../models/product.model"

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

export const addBagItem = async (userId, req) => {
  const bag = await Bag.findOne({ usser: userId })
  const product = await Product.findById(req.productId)
  const isPresent = await BagItems.findOne({
    bag: bag._id,
    product: product._id,
    userId,
  })

  if (!isPresent) {
    const bagItem = new BagItems({
      product: product._id,
      bag: bag._id,
      quantity: 1,
      userId,
      price: product.discountedPrice,
      size: req.size,
      discountedPrice: product.discountedPrice,
    })

    const createdBagItem = await bagItem.save()
    bag.bagItems.push(createdBagItem)
    await bag.save()
  }
  return "Item added to bag"
}
