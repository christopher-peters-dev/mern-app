import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z.string().min(1, "First name is required").trim(),
    lastName: z.string().min(1, "Last name is required").trim(),
    email: z.email("Invalid email adress").trim(),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(64, "Password too long"),
    confirmPassword: z.string().min(6, ">();Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterInput = z.infer<typeof registerSchema>;
