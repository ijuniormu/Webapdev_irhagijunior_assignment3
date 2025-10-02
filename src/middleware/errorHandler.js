export default function errorHandler(err, req, res, next) {
  console.error(err);
  if (err.name === "CastError") {
    return res.status(400).json({ error: "Invalid ID format" });
  }
  if (err.name === "ValidationError") {
    return res.status(422).json({ error: err.message });
  }
  res.status(500).json({ error: "Server error" });
}
