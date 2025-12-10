import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Divide } from "lucide-react";
import React from "react";
import { InputHTMLAttributes } from "react";

interface ImputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  wrapperClassName?: string;
  helperText?: string;
  error?: string;
}

export const CustomInput = React.forwardRef<HTMLInputElement, ImputProps>(
  ({ wrapperClassName, helperText, className, label, id, type = "text", error, ...args }, ref) => {
    return (
      <div className={cn("flex flex-col space-y-2 text-gray-400", wrapperClassName)}>
        {label && (
          <Label className="text-xs" htmlFor={id}>
            {label}
          </Label>
        )}
        <Input
          ref={ref}
          id={id}
          type={type}
          className={cn(
            "border border-gray-300 rounded-lg bg-white h-full !text-sm md:!text-base p-2 md:p-4 shadow-none",
            className,
          )}
          {...args}
        />

        {helperText && !error && <div className="text-xs">{helperText}</div>}
      </div>
    );
  },
);
