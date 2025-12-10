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

const NavigationItem = ({ navItem: { href, label } }: IProps) => {
  const locationsPath = usePathname();
  const isActive = locationsPath === href;
  const isSettings = label === "Setting";
  let icon;

  if (isSettings) {
    icon = isActive ? settingFill : setting;
  } else {
    icon = isActive ? dashboardFill : dashboard;
  }

  return (
    <Link
      href={href}
      className={cn("text-gray-100 flex items-center gap-3", { "text-green-100": isActive })}
    >
      <Image src={icon} alt={`${label} img`} />
      {label}
    </Link>
  );
};

export default NavigationItem;
