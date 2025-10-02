import { Router } from "express";
import {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
  removeAllContacts
} from "../controllers/contactController.js";

const router = Router();

router.get("/", getContacts);
router.get("/:id", getContactById);
router.post("/", addContact);
router.put("/:id", updateContact);
router.delete("/:id", removeContact);
router.delete("/", removeAllContacts);

export default router;
