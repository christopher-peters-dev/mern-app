import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(5, "Minimum length is 5")
      .max(20, "Maximum length is 20")
      .regex(/^[A-Za-z]+$/, "Only alphabets allowed")
      .trim(),
    lastName: z
      .string()
      .min(5, "Minimum length is 5")
      .max(20, "Maximum length is 20")
      .regex(/^[A-Za-z]+$/, "Only alphabets allowed")
      .trim(),
    email: z.email("Invalid email address").trim(),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(64, "Password too long"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterInput = z.infer<typeof registerSchema>;
