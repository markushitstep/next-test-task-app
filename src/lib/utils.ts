import { DateType, StatusTypes, Task, TaskColumn } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTodayDate = (): DateType => {
  const locale = "en-US";
  const d = new Date();

  const day = d.getDate().toString();
  const month = d.toLocaleString(locale, { month: "long" });
  const year = d.getFullYear();
  const weekday = d.toLocaleString(locale, { weekday: "long" });

  return { day, month, year, weekday };
};

export const getStatusCount = (props: Task[], title: StatusTypes) => {
  return props.filter((p) => p.status === title);
};

export const mapTaskColumns = (tasks: Task[] | undefined): TaskColumn[] => {
  if (!tasks || tasks.length === 0) return [];

  return [
    {
      title: StatusTypes.toDo,
      tasks: getStatusCount(tasks, StatusTypes.toDo),
    },
    {
      title: StatusTypes.inProgress,
      tasks: getStatusCount(tasks, StatusTypes.inProgress),
    },
    {
      title: StatusTypes.review,
      tasks: getStatusCount(tasks, StatusTypes.review),
    },
    {
      title: StatusTypes.completed,
      tasks: getStatusCount(tasks, StatusTypes.completed),
    },
  ];
};

export const capitalizedFirstLetter = (string: string) => string[0].toUpperCase() + string.slice(1);
