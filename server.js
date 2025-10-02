import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import errorHandler from "./src/middleware/errorHandler.js";

dotenv.config();
const app = express();

await connectDB(process.env.MONGODB_URI);

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// root message required by assignment
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

// REST API routes
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);

// error handler (last)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
