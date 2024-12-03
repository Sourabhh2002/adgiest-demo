import React, { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

type StoryProps = ComponentProps<typeof Checkbox>;

const meta: Meta<StoryProps> = {
  component: Checkbox,
  argTypes: {
    checked: {
      control: "boolean",
    },
    size: {
      options: ["sm", "md", "lg"],
      control: "select",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    onChange: (checked) => console.log("Checkbox changed:", checked),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    checked: false,
    size: "md",
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    size: "md",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    checked: false,
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    checked: false,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    checked: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const Interactive: Story = {
  args: {
    checked: false,
    size: "lg",
  },
  tags: ["autodocs"],
  render: (args) => {
    const [isChecked, setIsChecked] = React.useState(false);
    return (
      <Checkbox
        {...args}
        checked={isChecked}
        onChange={(checked) => setIsChecked(checked)}
      />
    );
  },
};
