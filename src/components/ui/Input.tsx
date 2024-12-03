"use client";

import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { useState } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "primary" | "secondary";
  isDisabled?: boolean;
  isError?: boolean;
};

export default function Input({
  variant,
  className,
  isDisabled,
  isError,
  ...props
}: InputProps) {
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <input
        {...props}
        className={cn(
          inputVariants({ variant }),
          isDisabled && disabledStyles(),
          isError && errorStyles(),
          isActive && activeStyles(),
          isClicked && "border-[#9A9A9A]",
          !isClicked && "hover:border-[#CCCCCC]",
          className
        )}
        disabled={isDisabled}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
      />

      {isError ? (
        <span className="text-sm tracking-[-0.56px] block mt-[6px]">
          Error Message
        </span>
      ) : null}
    </>
  );
}

const inputVariants = cva(
  "w-full border border-[#B6B6B6] rounded-[6px] h-12 px-4 text-[#000] outline-none tracking-[-0.04em]",
  {
    variants: {
      variant: {
        primary: `bg-[#CCCCCC] placeholder:text-[#7A7A7A] hover:shadow-input-primary transition-all duration-150`,
        secondary: "bg-[#C2BFBA] placeholder:text-[#747370]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const activeStyles = () => "placeholder:text-[#000]";

const disabledStyles = () =>
  "bg-[#D0D0D0] border-none placeholder:text-[#909090] opacity-[0.4] hover:shadow-none cursor-not-allowed";

const errorStyles = () =>
  "border-[#E74949] text-[#E74949] hover:shadow-input-primary-error hover:border-[#E74949] placeholder:text-[#E74949] shadow-input-primary-error";
