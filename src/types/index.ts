export type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
};

export interface DateType {
  day: string;
  month: string;
  year: number;
  weekday: string;
}

export enum StatusTypes {
  toDo = "to-do",
  inProgress = "in-progress",
  review = "review",
  completed = "completed",
}

export type ButtonType =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | null
  | undefined;
