"use client";

import { SettingsProfilePanel } from "../settings/(components)/SettingsProfilePanel";
import { MainPageLayout } from "@/components/layouts/MainPageLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full">
      <MainPageLayout title="Settings">{children}</MainPageLayout>
      <div className="h-full">
        <SettingsProfilePanel />
      </div>
    </div>
  );
}
