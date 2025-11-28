"use client";

import { useTasks } from "@/hooks/useTasks";
import { getDate, getStatusCount } from "@/lib/utils";
import DashColumn from "./(components)/DashColumn";
import { StatusTypes } from "@/types";
import { MainPageLayout } from "@/components/layouts/MainPageLayout";

export default function Dashboard() {
  const { data, isLoading, error } = useTasks();

  if (isLoading) return <div className="p-8">Loading…</div>;
  if (error) return <div className="p-8">Failed to load tasks</div>;
  if (!data || data.length === 0) return <div className="p-8">No tasks...</div>;

  const date = getDate(data);
  const toDoTasks = getStatusCount(data, StatusTypes.toDo);
  const inProgressTasks = getStatusCount(data, StatusTypes.inProgress);
  const reviewTasks = getStatusCount(data, StatusTypes.review);
  const completedTasks = getStatusCount(data, StatusTypes.completed);

  return (
    <MainPageLayout title="My Tasks" date={date}>
      <div className="mt-5 2xl:mt-7 h-full min-h-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 overflow-y-scroll xl:overflow-none">
        <DashColumn title={StatusTypes.toDo} tasks={toDoTasks} />
        <DashColumn title={StatusTypes.inProgress} tasks={inProgressTasks} />
        <DashColumn title={StatusTypes.review} tasks={reviewTasks} />
        <DashColumn title={StatusTypes.completed} tasks={completedTasks} />
      </div>
    </MainPageLayout>
  );
}
