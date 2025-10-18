import { Router } from "express";
import type { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import logger from "../utils/logger.js";
import bcrypt from "bcryptjs";
import User, { type UserInterface } from "../models/user.js";
import jwt from "jsonwebtoken";

const router = Router();

router.post(
  "/login",
  [
    check("email", "Email is required").isEmail().normalizeEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.error({ errors: errors.array() }, "Validation failed for /login");
      return res.status(401).json({ message: errors.array() });
    }

    try {
      const { email, password } = req.body as UserInterface;
      const normalizeEmail = email.toLowerCase();
      const user = await User.findOne({ email: normalizeEmail }).lean().exec();
      if (!user) {
        logger.info({ email: normalizeEmail }, "Invalid Credentials");
        return res.status(401).json({ message: "Invalid Credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        logger.info({ email: normalizeEmail }, "Invalid Credentials");
        return res.status(401).json({ message: "Invalid Credentials" });
      }
      const userId = user._id ? String(user._id) : null;
      const token = jwt.sign(
        { userId, email: user.email },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "1d" }
      );
      res.cookie("accessToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
      });
      logger.info({ email: normalizeEmail }, "User loggged in successfully");
      res.status(200).json({ message: "User loggged in successfully" });
    } catch (error) {
      logger.error({ error }, "Internal Server error");
      return res.status(500).send("Internal Server Error");
    }
  }
);

export default router;
