import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ButtonType } from "@/types";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  loading?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export const CustomButton = ({
  className,
  disabled = false,
  children,
  loading,
  variant,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      disabled={disabled || loading}
      className={className}
      onClick={onClick}
    >
      {children || `This is Button`}
    </Button>
  );
};

export const ButtonSecondary = ({ className = "", ...args }: ButtonProps) => {
  return (
    <CustomButton
      variant={"secondary"}
      className={cn(
        "cursor-pointer px-3 py-1 bg-green-100 text-white text-xs hover:!bg-green-200",
        className,
      )}
      {...args}
    />
  );
};
