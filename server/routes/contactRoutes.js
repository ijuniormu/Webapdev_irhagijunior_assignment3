// server/routes/contactRoutes.js
import { Router } from "express";
import {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
  removeAllContacts
} from "../controllers/contactController.js";
import { auth } from "../middleware/auth.js";

const router = Router();

// Only GET and DELETE are protected (per assignment)
router.get("/", auth, getContacts);
router.get("/:id", auth, getContactById);

router.post("/", addContact);
router.put("/:id", updateContact);

router.delete("/:id", auth, removeContact);
router.delete("/", auth, removeAllContacts);

export default router;
