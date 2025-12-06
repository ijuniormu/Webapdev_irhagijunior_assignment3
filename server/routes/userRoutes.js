// server/routes/userRoutes.js
import { Router } from "express";
import {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  removeUser,
  removeAllUsers,
  loginUser
} from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";

const router = Router();

// Protected routes
router.get("/", auth, getUsers);
router.get("/:id", auth, getUserById);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, removeUser);
router.delete("/", auth, removeAllUsers);

// Public routes
router.post("/", addUser);       // registration
router.post("/login", loginUser);

export default router;
