import { DateType } from "@/types";

interface IProps {
  date: DateType | null;
  title: string;
  className?: string;
}

const PageTitle = ({ date, title, className }: IProps) => {
  return (
    <div className={`flex flex-col xl:gap-1 ${className}`}>
      <h1 className="font-medium text-lg xl:text-xl">{title}</h1>
      <p className="text-gray-100">
        <span className="text-green-100 text-xs xl:text-base">{date?.weekday}</span>,
        <span className="text-xs xl:text-base">{` ${date?.day} ${date?.month} ${date?.year}`}</span>
      </p>
    </div>
  );
};

export default PageTitle;
