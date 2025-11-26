"use client";

import Image from "next/image";
import Link from "next/link";
import dashboardFill from "@/images/navigation/dashboardFill.svg";
import dashboard from "@/images/navigation/dashboard.svg";
import setting from "@/images/navigation/setting.svg";
import settingFill from "@/images/navigation/settingFill.svg";
import { NavItemType } from "./Navigation";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface IProps {
  navItem: NavItemType;
}

const NavigationItem = ({ navItem }: IProps) => {
  const locationsPath = usePathname();
  const isActive = locationsPath === navItem.href;
  const isSettings = navItem.label === "Setting";

  const icon = isSettings
    ? isActive
      ? settingFill
      : setting
    : isActive
    ? dashboardFill
    : dashboard;

  return (
    <Link
      href={navItem.href}
      className={cn("text-gray-100 flex items-center gap-3", { "text-green-100": isActive })}
    >
      <Image src={icon} alt={`${navItem.label} img`} />
      {navItem.label}
    </Link>
  );
};

export default NavigationItem;
