import AvatarProgress from "@/components/ui/AvatarProgress";
import { ButtonSecondary } from "@/components/ui/buttons";

export const SettingsProfilePanel = () => {
  const progress = 75;
  return (
    <div className="hidden md:flex flex-col p-5 h-full min-h-0 shrink-0 w-[312px] bg-white">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="font-medium text-xl">My Profile</h2>
          <p className="text-green-100 text-sm">{`${progress}% completed your profile`}</p>

          <div className="flex flex-col items-center gap-3 pt-8 pb-3 border-b border-gray-500">
            <AvatarProgress progress={progress} />
            <p className="font-medium">User R.</p>
            <p className="text-gray-100 text-sm">Developer at White Digital</p>
          </div>
        </div>
        <div>
          <ButtonSecondary className="bg-red-100 w-full hover:!bg-red-200">Logout</ButtonSecondary>
        </div>
      </div>
    </div>
  );
};
