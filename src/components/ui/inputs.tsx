import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Divide } from "lucide-react";
import { InputHTMLAttributes } from "react";

interface ImputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  wrapperClassName?: string;
  helperText?: string;
}

export const CustomInput = ({
  wrapperClassName,
  helperText,
  className,
  label,
  id,
  type = "text",
  ...args
}: ImputProps) => {
  return (
    <div className={`flex flex-col space-y-2 text-gray-400 ${wrapperClassName}`}>
      {label && (
        <Label className="text-xs" htmlFor={id}>
          {label}
        </Label>
      )}
      <Input
        id={id}
        type={type}
        className={`border border-gray-300 rounded-lg bg-white h-full !text-sm md:!text-base p-2 md:p-4 shadow-none ${className}`}
        {...args}
      />

      {helperText && <div className="text-xs">{helperText}</div>}
    </div>
  );
};
