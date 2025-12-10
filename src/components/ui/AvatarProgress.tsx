import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface IProps {
  progress: number;
}

const AvatarProgress = ({ progress }: IProps) => {
  const clamped = Math.min(100, Math.max(0, progress));
  const angle = (clamped / 100) * 360;
  return (
    <div className="relative h-25 w-25">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(#64c882 0deg ${angle}deg, transparent ${angle}deg 360deg)`,
        }}
      />

      <div className="absolute inset-1 rounded-full bg-white" />

      <div className="relative flex h-full w-full items-center justify-center">
        <Avatar className="h-20 w-20">
          <AvatarFallback className="bg-gray-300" />
        </Avatar>
      </div>
    </div>
  );
};

export default AvatarProgress;
