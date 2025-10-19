import { UserPlus, Plus, LogIn } from "lucide-react";
import type { ButtonConfig } from "./types/button";

export const buttonConfig: ButtonConfig = {
  signup: { label: "Sign Up", icon: UserPlus, actionUrl: "/register" },
  signin: { label: "Sign In", icon: LogIn, actionUrl: "/signin" },
  createAccount: {
    label: "Create Account",
    icon: Plus,
  },
};
