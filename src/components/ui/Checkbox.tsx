"use client";

import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

interface CheckboxProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const checkboxVariants = cva(
  "relative rounded transition-all duration-200 ease-in-out flex items-center justify-center",
  {
    variants: {
      checked: {
        true: "bg-[#63AA75]",
        false: "bg-[#CCCCCC] border border-[#B6B6B6]",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "cursor-pointer",
      },
      size: {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
      size: "md",
    },
  }
);

const dotSizes = {
  sm: "w-2 h-2",
  md: "w-2.5 h-2.5",
  lg: "w-3.5 h-3.5",
};

export default function Checkbox({
  checked = false,
  onChange,
  size = "md",
  disabled = false,
  className,
  ...props
}: CheckboxProps) {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      className={cn(checkboxVariants({ checked, disabled, size }), className)}
      disabled={disabled}
      aria-checked={checked}
      role="checkbox"
    >
      {checked && (
        <div
          className={cn(
            "rounded-sm bg-black transition-transform duration-200 ease-in-out",
            dotSizes[size]
          )}
        />
      )}
    </button>
  );
}
