import express from "express"
import {
  createUser,
  deleteUser,
  getUserProfile,
  loginUser,
  logoutUser,
  updateProfile,
} from "../controllers/user.controllers.js"
import { isAuthenticated } from "../middlewares/auth.middleware.js"

const router = express.Router()
router.post("/create", createUser)
router.post("/login", loginUser)
router.get("/logout", logoutUser)
router.get("/profile", isAuthenticated, getUserProfile)
router
  .route("/:id")
  .put(isAuthenticated, updateProfile)
  .delete(isAuthenticated, deleteUser)
export default router
