"use client";

import { fetchTasks } from "@/lib/api";
import { mapTaskColumns } from "@/lib/utils";
import { Task, TaskSelectData } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useTasks() {
  return useQuery<Task[], Error, TaskSelectData>({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
    select: (tasks) => ({
      columnsTasks: mapTaskColumns(tasks),
    }),
    staleTime: 30_000,
    refetchOnWindowFocus: false,
  });
}
