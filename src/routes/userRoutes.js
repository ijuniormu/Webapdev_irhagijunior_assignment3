import { Router } from "express";
import {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  removeUser,
  removeAllUsers
} from "../controllers/userController.js";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", removeUser);
router.delete("/", removeAllUsers);

export default router;
