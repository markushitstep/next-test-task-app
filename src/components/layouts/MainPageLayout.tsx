import { ReactNode } from "react";
import PageTitle from "../common/PageTitle";

interface IProps {
  title: string;
  children: ReactNode;
}

export const MainPageLayout = ({ title, children }: IProps) => {
  return (
    <div className="w-full h-full flex flex-col p-10 md:p-6 xl:p-8">
      <PageTitle title={title} className="2xl:mt-2 shrink-0" />
      {children}
    </div>
  );
};
