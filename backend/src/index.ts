import "dotenv/config";
import express from "express";
import cors from "cors";
import type { Request, Response } from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_CONNECTION_STRING as string);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello Express" });
});

app.listen(PORT, () => {
  console.log(`Express listening on PORT ${PORT}`);
});
