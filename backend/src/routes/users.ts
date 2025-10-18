import { Router } from "express";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User, { type UserInterface } from "../models/user.js";
import { check, validationResult } from "express-validator";
import logger from "../utils/logger.js";

const router = Router();

router.post(
  "/register",
  [
    check("firstName", "First Name is required").isString().trim().notEmpty(),
    check("lastName", "Last Name is required").isString().trim().notEmpty(),
    check("email", "Email is required").isEmail().normalizeEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.warn(
        { errors: errors.array() },
        "Validation failed for /register"
      );
      return res.status(400).json({ message: errors.array() });
    }
    try {
      const { firstName, lastName, email, password } =
        req.body as UserInterface;
      const normalizeEmail = email.toLowerCase();
      let existing = await User.findOne({ email: normalizeEmail })
        .lean()
        .exec();
      if (existing) {
        logger.info(
          { email: normalizeEmail },
          "Attempting to register existing user"
        );
        return res.status(400).json({ message: "User already exist" });
      }
      const user = new User({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: normalizeEmail,
        password,
      });
      await user.save();
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "1d" }
      );
      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000, // 1 day,
      });
      logger.info({ userId: user.id }, "User Registered");
      res.sendStatus(200);
    } catch (err: unknown) {
      logger.error({ err }, "Error in /register");
      res.status(500).json({ message: "Internal Server error" });
    }
  }
);

export default router;
