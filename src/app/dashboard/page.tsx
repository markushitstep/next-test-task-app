"use client";

import { useTasks } from "@/hooks/useTasks";
import DashColumn from "./(components)/DashColumn";
import { MainPageLayout } from "@/components/layouts/MainPageLayout";

export default function Dashboard() {
  const { data, isLoading, error } = useTasks();

  if (isLoading || !data) return <div className="p-8">Loading…</div>;
  if (error) return <div className="p-8">Failed to load tasks</div>;

  const { columnsTasks } = data;

  return (
    <MainPageLayout title={"My Tasks"}>
      <div className="mt-5 2xl:mt-7 h-full min-h-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 overflow-y-scroll xl:overflow-none">
        {columnsTasks.map((column) => (
          <DashColumn key={column.title} title={column.title} tasks={column.tasks} />
        ))}
      </div>
    </MainPageLayout>
  );
}
