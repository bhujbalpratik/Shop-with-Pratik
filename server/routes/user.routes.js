import express from "express"
import {
  createUser,
  getUserProfile,
  loginUser,
  logoutUser,
} from "../controllers/user.controllers.js"
import { isAuthenticated } from "../middlewares/auth.middleware.js"

const router = express.Router()
router.post("/create", createUser)
router.post("/login", loginUser)
router.get("/logout", logoutUser)
router.get("/profile", isAuthenticated, getUserProfile)
export default router
