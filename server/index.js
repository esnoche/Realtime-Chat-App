import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/AuthRoute.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = process.env.PORT || 7661;
const databaseURL = process.env.DATABASE_URL;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

// Log the origin to ensure it's correct
console.log("CORS origin:", process.env.ORIGIN);

app.use("/uploads/profiles", express.static(path.join(__dirname, "uploads", "profiles")));

// Log the static files path
console.log("Static files path:", path.join(__dirname, "uploads", "profiles"));

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);

// Log the database URL to ensure it's correct (DO NOT log sensitive information in production)
console.log("Database URL:", databaseURL);

mongoose
  .connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err.message));

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
