import { Router } from "express";
import type { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import logger from "../utils/logger.js";

const router = Router();

router.post(
  "/login",
  [
    check("email", "Email is required").isString(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.error(JSON.stringify(errors));
      return res.status(401).json({ message: errors.array() });
    }

    const { email, password } = req.body;
    try {
    } catch (error) {
      logger.error(JSON.stringify(error));
      return res.status(500).send("Internal Server Error");
    }
  }
);

export default router;
