import type { LucideIcon } from "lucide-react";

export interface ButtonInfo {
  label: string;
  icon: LucideIcon;
  actionUrl?: string;
}

export type ButtonConfig = Record<string, ButtonInfo>;
