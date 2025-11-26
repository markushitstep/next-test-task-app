import { DateType, StatusTypes, Task } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDate = (props: Task[]): DateType => {
  const locale = "en-US";
  const createdAtISO = props[0].createdAt;

  const d = new Date(createdAtISO);

  const day = d.getDate().toString().padStart(2, "0");
  const month = d.toLocaleString(locale, { month: "long" });
  const year = d.getFullYear();
  const weekday = d.toLocaleString(locale, { weekday: "long" });

  return { day, month, year, weekday };
};

export const getStatusCount = (props: Task[], title: StatusTypes) => {
  return props.filter((p) => p.status === title);
};
