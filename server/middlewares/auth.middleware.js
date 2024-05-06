import jwt from "jsonwebtoken"
import { errorHandler } from "../utils/error.handler.js"
import { User } from "../models/user.model.js"
export const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies

    if (!token) return next(errorHandler(401, "You should login first"))

    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
      if (err) return next(errorHandler(401, "invalid cookie value"))
      req.user = await User.findById(user._id)
      next()
    })
  } catch (error) {
    next(error)
  }
}
