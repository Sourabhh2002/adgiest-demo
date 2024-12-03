import React, { useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import SwitchIcon from "../../../public/assets/images/svg/SwitchIcon";

type SwitchProps = React.HTMLAttributes<HTMLButtonElement> & {
  initialState?: boolean;
  onToggle: (state: boolean) => void;
  size?: "sm" | "md" | "lg";
  bgColorOn?: string;
  bgColorOff?: string;
  gapColorOn?: string;
  gapColorOff?: string;
};

const switchVariants = cva(
  "flex items-center rounded-full transition-colors duration-1000 ease-in-out focus:outline-none shadow-switch flex-shrink-0 cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-[30px] w-[66px] px-[5px]",
        md: "h-[35px] w-[77px] px-[6px]",
        lg: "h-[40px] w-[88px] px-[7px]",
      },
      spinning: {
        true: "cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      size: "lg",
      spinning: false,
    },
  }
);

const switchIconVariants = cva(
  "pointer-events-none transform transition-transform duration-300 ease-in-out",
  {
    variants: {
      size: {
        sm: "size-6",
        md: "size-7",
        lg: "size-8",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
);

export default function Switch({
  initialState = false,
  onToggle,
  size = "md",
  bgColorOn = "#63AA75",
  bgColorOff = "#DADADA",
  gapColorOn = "#63AA75",
  gapColorOff = "#CCCCCC",
  className,
  ...props
}: SwitchProps) {
  const [isToggled, setIsToggled] = useState(initialState);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleToggle = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    const newState = !isToggled;
    setIsToggled(newState);

    if (onToggle) {
      onToggle(newState);
    }

    const spinTimeout = setTimeout(() => {
      setIsSpinning(false);
    }, 300);

    return () => clearTimeout(spinTimeout);
  };

  const translateXClass = isToggled
    ? size === "sm"
      ? "translate-x-[32px]"
      : size === "md"
      ? "translate-x-[37px]"
      : "translate-x-[42px]"
    : "translate-x-0";

  return (
    <div className="flex items-center space-x-3">
      <button
        type="button"
        aria-pressed={isToggled}
        onClick={handleToggle}
        disabled={isSpinning}
        className={cn(
          switchVariants({ size, spinning: isSpinning }),
          className
        )}
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), ${
            isToggled ? bgColorOn : bgColorOff
          }`,
        }}
        {...props}
      >
        <SwitchIcon
          gapColor={isToggled ? gapColorOn : gapColorOff}
          className={cn(
            isToggled ? "translate-x-[42px]" : "translate-x-0",
            isSpinning ? (isToggled ? "rotate-90" : "-rotate-90") : "",
            switchIconVariants({
              size,
            }),
            translateXClass
          )}
        />
      </button>
    </div>
  );
}
