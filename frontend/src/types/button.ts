import type { LucideIcon } from "lucide-react";

export interface ButtonInfo {
  label: string;
  icon: LucideIcon;
}

export type ButtonConfig = Record<string, ButtonInfo>;
