"use client";

import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { useState } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "rounded" | "roundedProgress";
  isActive?: boolean;
  iconPosition?: "left" | "right";
  icon?: React.ReactNode;
};

export default function Button({
  className,
  isActive,
  variant,
  iconPosition,
  icon,
  children,
  ...props
}: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => setIsClicked(true);
  const handleMouseLeave = () => setIsClicked(false);

  return (
    <button
      {...props}
      className={cn(
        buttonVariants({ variant }),
        isActive || isClicked ? activeStyles(variant) : hoverStyles(variant),
        className,
        iconPosition === "left" && "flex items-center gap-[10px]",
        iconPosition === "right" && "flex items-center flex-row-reverse gap-3"
      )}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
    >
      {icon && <span className="icon">{icon}</span>}
      {children}
    </button>
  );
}

const buttonVariants = cva("transition-all duration-200 border-none", {
  variants: {
    variant: {
      primary: "rounded h-12 bg-[#ccc] text-[#000] shadow-btn-primary px-8",
      secondary: "rounded-md h-12 bg-[#000] text-white px-8 uppercase",
      rounded: "rounded-full bg-[#000] text-white shadow-btn-rounded p-4",
      roundedProgress: "rounded-full bg-[#c3c3c3] text-black p-4",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const hoverStyles = (variant?: string) => {
  switch (variant) {
    case "primary":
      return "hover:bg-[#63AA75] hover:shadow-btn-primary-hover";
    case "rounded":
      return "hover:bg-[#D9D9D9] hover:shadow-btn-rounded-active";
    default:
      return "";
  }
};

const activeStyles = (variant?: string) => {
  switch (variant) {
    case "primary":
      return "bg-[#63AA75] shadow-btn-primary-active";
    case "rounded":
      return "bg-[#D9D9D9] shadow-btn-rounded-active";
    default:
      return "";
  }
};
