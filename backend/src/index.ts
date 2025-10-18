import "dotenv/config";
import express from "express";
import cors from "cors";
import type { Request, Response } from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import logger from "./utils/logger.js";

const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_CONNECTION_STRING as string);
logger.info("✅ Connected to MongoDB");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello Express" });
});

app.listen(PORT, () => {
  logger.info(`Express listening on PORT ${PORT}`);
});
