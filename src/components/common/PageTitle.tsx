import { cn, getTodayDate } from "@/lib/utils";

interface IProps {
  title: string;
  className?: string;
}

const PageTitle = ({ title, className }: IProps) => {
  const { day, month, year, weekday } = getTodayDate();
  return (
    <div className={cn("flex flex-col xl:gap-1", className)}>
      <h1 className="font-medium text-lg xl:text-xl">{title}</h1>
      <p className="text-gray-100">
        <span className="text-green-100 text-xs xl:text-base">{weekday}</span>,
        <span className="text-xs xl:text-base">{` ${day} ${month} ${year}`}</span>
      </p>
    </div>
  );
};

export default PageTitle;
