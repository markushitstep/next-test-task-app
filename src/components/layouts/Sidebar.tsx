"use client";

import Navigation from "../navigations/Navigation";
import Logo from "../ui/Logo";
import UserCard from "../ui/UserCard";

export function Sidebar() {
  return (
    <div className="hidden md:flex w-[220px] shrink py-9 px-7 flex-col justify-between">
      <div className="flex flex-col gap-10 mt-5">
        <Logo />
        <Navigation />
      </div>
      <div>
        <UserCard />
      </div>
    </div>
  );
}
