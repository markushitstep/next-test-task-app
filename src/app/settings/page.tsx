"use client";

import { MainPageLayout } from "@/components/layouts/MainPageLayout";
import { ButtonSecondary } from "@/components/ui/buttons";
import { CustomInput } from "@/components/ui/inputs";
import { useTasks } from "@/hooks/useTasks";
import { getDate } from "@/lib/utils";
import { useState } from "react";
import { SettingsProfilePanel } from "./(components)/SettingsProfilePanel";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const settingsFormSchema = z.object({
  userName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),

  userPassword: z
    .string()
    .min(4, "Your password is between 4 and 12 characters")
    .max(12, "Your password is between 4 and 12 characters"),
});

type SettingsFormValues = z.infer<typeof settingsFormSchema>;

export default function Settings() {
  const { data, isLoading } = useTasks();

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: {
      userName: "User Random",
      userPassword: "",
    },
    mode: "onBlur",
  });

  if (isLoading) {
    return <div className="p-8">Loading…</div>;
  }

  if (!data || data.length === 0) return <div className="p-8">No tasks</div>;

  const date = data?.length ? getDate(data) : null;

  const handleChangeForm = (values: SettingsFormValues) => {
    console.log("Settings form submitted:", values);
  };

  return (
    <div className="flex h-full min-h-0">
      <MainPageLayout title="Settings" date={date}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleChangeForm)} className="flex flex-col mt-4 gap-4">
            <FormField
              control={form.control}
              name="userName"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <CustomInput
                      id="userName"
                      label="Name"
                      placeholder="Enter name"
                      {...field}
                      error={fieldState.error?.message}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userPassword"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <CustomInput
                      id="userPassword"
                      type="password"
                      label="Password"
                      placeholder="Enter password"
                      helperText="Your password is between 4 and 12 characters"
                      {...field}
                      error={fieldState.error?.message}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-3 flex justify-end">
              <ButtonSecondary className="max-w-68 w-full" type="submit">
                Save
              </ButtonSecondary>
            </div>
          </form>
        </Form>
      </MainPageLayout>
      <SettingsProfilePanel />
    </div>
  );
}
