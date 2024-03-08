import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMilliseconds(milliseconds: number) {
  // Convert milliseconds to seconds
  const seconds = Math.floor(milliseconds / 1000);
  // Calculate hours
  const hours = Math.floor(seconds / 3600);
  // Calculate remaining minutes
  const minutes = Math.floor((seconds % 3600) / 60);
  // Calculate remaining seconds
  const remainingSeconds = seconds % 60;

  // Format the result as hh:mm:ss
  const formattedTime =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    remainingSeconds.toString().padStart(2, "0");

  return formattedTime;
}

export const defaultVideoId = "B_rAI7zaVZU";
