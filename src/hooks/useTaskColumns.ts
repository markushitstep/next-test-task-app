import { getStatusCount } from "@/lib/utils";
import { StatusTypes, Task, TaskColumn } from "@/types";
import { useMemo } from "react";

export const useTaskColumns = (tasks: Task[] | undefined): TaskColumn[] => {
  return useMemo(() => {
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
  }, [tasks]);
};
