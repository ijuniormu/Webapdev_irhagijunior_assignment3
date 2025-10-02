import User from "../models/User.js";

export const getUsers = async (req, res, next) => {
  try {
    const docs = await User.find();
    res.json(docs);
  } catch (err) { next(err); }
};

export const getUserById = async (req, res, next) => {
  try {
    const doc = await User.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: "User not found" });
    res.json(doc);
  } catch (err) { next(err); }
};

export const addUser = async (req, res, next) => {
  try {
    const doc = await User.create(req.body);
    res.status(201).json(doc);
  } catch (err) { next(err); }
};

export const updateUser = async (req, res, next) => {
  try {
    const doc = await User.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updated: new Date() },
      { new: true, runValidators: true }
    );
    if (!doc) return res.status(404).json({ error: "User not found" });
    res.json(doc);
  } catch (err) { next(err); }
};

export const removeUser = async (req, res, next) => {
  try {
    const doc = await User.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "User not found" });
    res.json({ deleted: true });
  } catch (err) { next(err); }
};

export const removeAllUsers = async (req, res, next) => {
  try {
    const result = await User.deleteMany({});
    res.json({ deletedCount: result.deletedCount });
  } catch (err) { next(err); }
};
