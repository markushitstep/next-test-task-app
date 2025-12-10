import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const TaskAvatarGroup = () => {
  return (
    <div className="flex -space-x-3">
      <Avatar className="w-8 h-8">
        <AvatarFallback className="bg-gray-100 border !border-white" />
      </Avatar>
      <Avatar className="w-8 h-8">
        <AvatarFallback className="bg-gray-100 border !border-white" />
      </Avatar>
      <Avatar className="w-8 h-8">
        <AvatarFallback className="bg-gray-100 border !border-white" />
      </Avatar>
    </div>
  );
};
