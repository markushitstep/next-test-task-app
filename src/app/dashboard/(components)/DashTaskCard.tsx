import { Task } from "@/types";
import { ClockIcon } from "@heroicons/react/24/outline";
import { ButtonSecondary } from "@/components/ui/buttons";
import { TaskActionDropdown } from "@/components/dashboard/TaskActionDropdown";
import { TaskAvatarGroup } from "@/components/dashboard/TaskAvatarGroup";
import { getTodayDate } from "@/lib/utils";

interface IProps {
  task: Task;
}

const DashTaskCard = ({ task }: IProps) => {
  const { day, month } = getTodayDate();
  return (
    <div className="flex cursor-pointer flex-col h-full min-h-50 md:min-h-0 overflow-hidden bg-white rounded-lg p-3 xl:p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium line-clamp-1 text-xs xl:text-base">{task.title}</h3>
        <TaskActionDropdown />
      </div>

      <div className="my-2 xl:my-3 md:min-h-11 flex-1 overflow-hidden">
        <p className="text-xs xl:text-sm leading-5 text-gray-200 line-clamp-3">
          {task.description}
        </p>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <div>
          <ButtonSecondary>
            <ClockIcon className="md:w-2 md:h-2 xl:w-3 xl:h-3" />
            {`${day} ${month}`}
          </ButtonSecondary>
        </div>
        <TaskAvatarGroup />
      </div>
    </div>
  );
};

export default DashTaskCard;
