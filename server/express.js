// server/express.js
import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Root route for assignment
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

// API routes
app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);

export default app;
