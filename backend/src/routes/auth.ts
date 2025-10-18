import { Router } from "express";
import type { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import logger from "../utils/logger.js";

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

    const { email, password } = req.body;
    try {
    } catch (error) {
      logger.error({ error }, "Internal Server error");
      return res.status(500).send("Internal Server Error");
    }
  }
);

export default router;
