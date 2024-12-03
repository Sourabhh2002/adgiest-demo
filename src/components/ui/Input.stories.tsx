import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: "select",
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    variant: "primary",
    placeholder: "Placeholder",
  },
  render: ({ placeholder, ...args }) => (
    <Input {...args} placeholder={placeholder} />
  ),
};

export const PrimaryDisabled: Story = {
  args: {
    variant: "primary",
    placeholder: "Placeholder",
  },
  render: ({ placeholder, ...args }) => (
    <Input {...args} placeholder={placeholder} isDisabled />
  ),
};

export const PrimaryWithError: Story = {
  args: {
    variant: "primary",
    placeholder: "Placeholder",
  },
  render: ({ placeholder, ...args }) => (
    <Input {...args} placeholder={placeholder} isError />
  ),
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    placeholder: "Placeholder",
  },
  render: ({ placeholder, ...args }) => (
    <Input {...args} placeholder={placeholder} />
  ),
};
