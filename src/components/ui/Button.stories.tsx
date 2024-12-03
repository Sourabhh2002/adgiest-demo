import { ComponentProps, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FaArrowRightLong, FaPlay } from "react-icons/fa6";
import Button from "./Button";
import Image from "next/image";

type StoryProps = ComponentProps<typeof Button> & {
  buttonText?: string;
  progress?: number;
};

const meta: Meta<StoryProps> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "rounded", "roundedProgress"],
      control: "select",
    },
    iconPosition: {
      options: [],
    },
    icon: {
      table: {
        disable: true,
      },
    },
    progress: {
      control: { type: "range", min: 0, max: 100 },
    },
  },
  args: {
    variant: "primary",
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: "Primary",
    variant: "primary",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const PrimaryActive: Story = {
  args: {
    buttonText: "Primary Active",
    variant: "primary",
    isActive: true,
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const PrimaryGroupedButton: Story = {
  args: {
    variant: "primary",
  },
  render: ({ ...args }) => {
    const btnData = [
      { id: 1, name: "Button 1" },
      { id: 2, name: "Button 2" },
      { id: 3, name: "Button 3" },
    ];

    const [activeBtn, setActiveBtn] = useState<number | null>(null);

    return (
      <div className="flex gap-1">
        {btnData.map((data) => (
          <Button
            {...args}
            key={data.id}
            isActive={data.id === activeBtn}
            onClick={() => setActiveBtn(data.id)}
          >
            {data.name}
          </Button>
        ))}
      </div>
    );
  },
};

export const SecondaryDark: Story = {
  args: {
    buttonText: "Secondary Dark",
    variant: "secondary",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

export const SecondaryDarkWithLeftIcon: Story = {
  args: {
    buttonText: "Secondary Dark With Left Icon",
    variant: "secondary",
  },
  render: ({ buttonText, ...args }) => (
    <Button
      {...args}
      iconPosition="left"
      icon={
        <Image
          src="/assets/images/png/google.png"
          alt="google"
          width={20}
          height={20}
        />
      }
    >
      {buttonText}
    </Button>
  ),
};

export const SecondaryDarkWithRightIcon: Story = {
  args: {
    buttonText: "Secondary Dark With Right Icon",
    variant: "secondary",
  },
  render: ({ buttonText, ...args }) => (
    <Button {...args} iconPosition="right" icon={<FaArrowRightLong />}>
      {buttonText}
    </Button>
  ),
};

export const SecondaryGradient: Story = {
  args: {
    buttonText: "Secondary Gradient",
    variant: "secondary",
  },
  render: ({ buttonText, ...args }) => (
    <Button {...args} className="bg-btn-gradient">
      {buttonText}
    </Button>
  ),
};

export const SecondaryGradientWithLeftIcon: Story = {
  args: {
    buttonText: "Let me Fill",
    variant: "secondary",
  },
  render: ({ buttonText, ...args }) => (
    <Button
      {...args}
      className="bg-btn-gradient px-5"
      iconPosition="left"
      icon={
        <Image
          src="/assets/images/png/ghost.png"
          alt="ghost"
          width={42}
          height={48}
          className="scale-[1.75] relative top-[-6px] -left-1"
        />
      }
    >
      <span className="relative right-[2px]">{buttonText}</span>
    </Button>
  ),
};

export const Rounded: Story = {
  args: {
    variant: "rounded",
  },
  render: (args) => (
    <Button {...args}>
      <FaPlay />
    </Button>
  ),
};

export const RoundedActive: Story = {
  args: {
    variant: "rounded",
    isActive: true,
  },
  render: (args) => (
    <Button {...args}>
      <FaPlay />
    </Button>
  ),
};

export const RoundedProgress: React.FC<{
  progress: number;
  variant: string;
}> = ({ progress = 50, ...args }) => {
  const radius = 29.5; // Radius of the outer circle
  const strokeWidth = 6; // Thickness of the donut
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={(radius + strokeWidth) * 2}
        height={(radius + strokeWidth) * 2}
        viewBox={`0 0 ${(radius + strokeWidth) * 2} ${
          (radius + strokeWidth) * 2
        }`}
        className="rotate-[-90deg]"
      >
        {/* Background Circle */}
        <circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={normalizedRadius}
          fill="none"
          stroke="#c3c3c3"
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        <circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={normalizedRadius}
          fill="none"
          stroke="#63AA75"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      {/* Button */}
      <div className="absolute">
        <Button {...args} variant="roundedProgress">
          <FaPlay className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
