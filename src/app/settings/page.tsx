"use client";

import { MainPageLayout } from "@/components/layouts/MainPageLayout";
import { ButtonSecondary } from "@/components/ui/buttons";
import { CustomInput } from "@/components/ui/inputs";
import { useTasks } from "@/hooks/useTasks";
import { getDate } from "@/lib/utils";
import { useState } from "react";
import { SettingsProfilePanel } from "./(components)/SettingsProfilePanel";

export default function Settings() {
  const { data, isLoading } = useTasks();
  const [userName, setUserName] = useState<string>("User Random");
  const [userPassword, setUserPassword] = useState<string>("");

  if (isLoading) {
    return <div className="p-8">Loading…</div>;
  }

  if (!data || data.length === 0) return <div className="p-8">No tasks</div>;

  const date = data?.length ? getDate(data) : null;

  const handleChangeForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ userName, userPassword });
  };

  return (
    <div className="flex h-full min-h-0">
      <MainPageLayout title="Settings" date={date}>
        <form onSubmit={handleChangeForm} className="flex flex-col mt-4 gap-4">
          <CustomInput
            value={userName}
            label="Name"
            placeholder="Enter name"
            id="name"
            type="name"
            onChange={(e) => setUserName(e.target.value)}
          />
          <CustomInput
            id="password"
            label="Password"
            type="password"
            placeholder="Enter password"
            helperText="Your password is between 4 and 12 characters"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />

          <div className="mt-3 flex justify-end">
            <ButtonSecondary className="max-w-[273px] w-full" type="submit">
              Save
            </ButtonSecondary>
          </div>
        </form>
      </MainPageLayout>

      <SettingsProfilePanel />
    </div>
  );
}
