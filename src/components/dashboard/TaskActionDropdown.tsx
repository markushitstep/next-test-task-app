import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

interface IProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

export const TaskActionDropdown = ({ onEdit, onDelete }: IProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus-visible:outline-none text-gray-100 cursor-pointer">
        <EllipsisHorizontalIcon className="w-6 h-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-20 min-w-0 border-0 bg-white">
        <DropdownMenuItem
          onClick={onEdit}
          className="text-xs xl:text-sm hover:bg-gray-300 cursor-pointer"
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={onDelete}
          className="text-xs xl:text-sm hover:bg-gray-300 cursor-pointer"
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
