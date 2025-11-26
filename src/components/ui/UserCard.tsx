import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const userData = {
  title: "User R.",
  email: "test-mail@email.com",
};

const UserCard = () => {
  return (
    <div className="flex gap-3">
      <Avatar className="w-8 h-8">
        <AvatarFallback className="bg-gray-100 text-transparent" />
      </Avatar>
      <div className="flex flex-col gap-1">
        <p className="text-[12px] font-medium">{userData.title}</p>
        <p className="text-[10px] text-gray-100">{userData.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
