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

    const newUser = await User.create({ name, email, password: hashedPassword })

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
    const { password: hashedPassword, ...rest } = validuser._doc
    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 12 * 24 * 60 * 60 * 1000,
      })
      .status(202)
      .json(rest)
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
  try {
    const { user } = req
    const { password, ...rest } = user._doc
    res.status(202).json(rest)
  } catch (error) {
    next(error)
  }
}
export const updateProfile = async (req, res, next) => {
  if (req.params.id !== req.user._id.toString())
    return next(errorHandler(400, "You can update only your account"))
  try {
    if (req.body.email) {
      const user = await User.findOne({ email: req.body.email })
      if (user) return next(errorHandler(400, "email already exist"))
    }

    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10)
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password,
        },
      },
      { new: true }
    )

    const { password, ...rest } = updatedUser._doc

    res.status(200).json({ message: "user updated successfully", rest })
  } catch (error) {
    next(error)
  }
}

export const deleteUser = async (req, res, next) => {
  if (req.params.id !== req.user._id.toString())
    return next(errorHandler(401, "Unauthorize to delete account"))
  try {
    await User.findByIdAndDelete(req.params.id)
    res
      .clearCookie("token")
      .status(200)
      .json({ message: "User deleted successfuly" })
  } catch (error) {
    next(error)
  }
}
