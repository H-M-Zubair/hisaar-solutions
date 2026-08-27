import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPkr(amount: number) {
  return `Rs ${amount.toLocaleString("en-PK")}`;
}

export function waLink(message?: string) {
  const base = "https://wa.me/923030609872";
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
