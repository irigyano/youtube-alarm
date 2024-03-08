import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function countdown(triggerTime: Date) {
  const timerMilSec = Math.ceil(triggerTime.getTime() - new Date().getTime());

  //   setTimeout(() => {
  //     window.location.replace(
  //       "https://www.youtube.com/watch?v=jALi8gYi7Gw&list=RDUaX-2gJ0PHg&index=11"
  //     );
  //   }, timerMilSec);
}

export const defaultVideoId = "B_rAI7zaVZU";
