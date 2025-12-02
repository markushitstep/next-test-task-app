import { Task } from "@/types";
import ColumnHeader from "./ColumnHeader";
import DashTaskCard from "./DashTaskCard";

interface IProps {
  title: string;
  tasks: Task[];
}

const DashColumn = ({ title, tasks }: IProps) => {
  const taskItems = tasks.slice(0, 3);
  const empty = Math.max(0, 3 - taskItems.length);

  return (
    <div className="flex  flex-col w-full h-full xl:min-h-0">
      <ColumnHeader title={title} count={tasks.length} />

      <div className="mt-3 2xl:mt-4 grid md:grid-rows-3 xl:min-h-0 flex-1 gap-4 2xl:gap-6">
        {taskItems.map((task) => (
          <DashTaskCard key={task.id} task={task} />
        ))}
        {Array.from({ length: empty }).map((_, index) => (
          <div
            key={index}
            className="hidden md:block cursor-pointer rounded-lg border border-dashed border-gray-100 "
          />
        ))}
      </div>
    </div>
  );
};

export default DashColumn;
