import { BagItems } from "../models/bagItem.model"
import { User } from "../models/user.model"

export const createBagItem = async (bagItemData) => {
  try {
    const bagItem = new BagItems(bagItemData)
    bagItem.quantity = 1
    bagItem.price = bagItem.product.price * bagItem.quantity
    bagItem.discountedPrice = bagItem.product.discountedPrice * bagItem.quantity

    const createdBagItem = await bagItem.save()
    return createdBagItem
  } catch (error) {
    throw new Error(error)
  }
}

export const updateBaItem = async (userId, bagItemId, bagItemData) => {
  try {
    const item = await findCartItemById(bagItemId)

    if (!item) {
      throw new Error("bag item not found : ", bagItemId)
    }
    const user = await User.findById(item.userId)

    if (!user) {
      throw new Error("user not found : ", userId)
    }

    if (user._id.toString() === userId.toString()) {
      item.quantity = bagItemData.quantity
      item.price = item.quantity * item.product.price
      item.discountedPrice = item.quantity * item.product.discountedPrice

      const updatedBagItem = await item.save()
      return updatedBagItem
    } else {
      throw new Error("You can't update another user's cart_item")
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const isBagItemExist = async (bag, product, size, userId) => {
  const bagItem = await BagItems.findOne({ bag, product, size, userId })
  return bagItem
}

export const removeCartItem = async (userId, bagItemId) => {
  const bagItem = await BagItems.findById(bagItemId)
  const user = await User.findById(bagItem.userId)
  const reqUser = await User.findById(userId)

  if (user._id === reqUser._id) {
    await BagItems.findByIdAndDelete(bagItem.id)
  } else {
    throw new Error("You can't remove another user's item")
  }
}

export const findBagItemById = async (bagItemId) => {
  const bagItem = await BagItems.findById(cartItemId).populate("product")
  if (bagItem) {
    return bagItem
  } else {
    throw new Error(`BagItem not found with id: ${bagItemId}`)
  }
}
