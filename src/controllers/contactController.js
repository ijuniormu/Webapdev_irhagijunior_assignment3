import Contact from "../models/Contact.js";

export const getContacts = async (req, res, next) => {
  try {
    const docs = await Contact.find();
    res.json(docs);
  } catch (err) { next(err); }
};

export const getContactById = async (req, res, next) => {
  try {
    const doc = await Contact.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: "Contact not found" });
    res.json(doc);
  } catch (err) { next(err); }
};

export const addContact = async (req, res, next) => {
  try {
    const doc = await Contact.create(req.body);
    res.status(201).json(doc);
  } catch (err) { next(err); }
};

export const updateContact = async (req, res, next) => {
  try {
    const doc = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!doc) return res.status(404).json({ error: "Contact not found" });
    res.json(doc);
  } catch (err) { next(err); }
};

export const removeContact = async (req, res, next) => {
  try {
    const doc = await Contact.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "Contact not found" });
    res.json({ deleted: true });
  } catch (err) { next(err); }
};

export const removeAllContacts = async (req, res, next) => {
  try {
    const result = await Contact.deleteMany({});
    res.json({ deletedCount: result.deletedCount });
  } catch (err) { next(err); }
};
