import { User } from "../models/user.model.js"
import { errorHandler } from "../utils/error.handler.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
export const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body

    const isUserExist = await User.findOne({ email })

    if (isUserExist) return next(errorHandler(400, "User already Exist"))

    if (password.length < 8)
      return next(errorHandler(400, "password must be at least 8 characters"))

    const hashedPassword = bcryptjs.hashSync(password, 10)

    await User.create({ name, email, password: hashedPassword })

    res.status(201).json({ message: "User created successfully" })
  } catch (error) {
    next(error)
  }
}
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const validuser = await User.findOne({ email })

    if (!validuser) return next(errorHandler(404, "invalid email or password"))

    const isPasswordMatch = bcryptjs.compareSync(password, validuser.password)

    if (!isPasswordMatch)
      return next(errorHandler(401, "invalid email or password"))

    const token = jwt.sign({ _id: validuser._id }, process.env.JWT_SECRET)

    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 12 * 24 * 60 * 60 * 1000,
      })
      .status(202)
      .json({ message: `Welcome ${validuser.name}` })
  } catch (error) {
    next(error)
  }
}
export const logoutUser = async (req, res, next) => {
  try {
    res
      .clearCookie("token")
      .status(200)
      .json({ message: "user logout successfully" })
  } catch (error) {
    next(error)
  }
}

export const getUserProfile = (req, res, next) => {
  const { user } = req
  const { password, ...rest } = user._doc
  res.status(202).json(rest)
}
// export const updateProfile = async (req, res, next) => {
//   if(req.params)
//   try {

//   } catch (error) {
//     next(error)
//   }
// }
