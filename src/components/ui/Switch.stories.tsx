import { ComponentProps } from "react";
import Switch from "./Switch";
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof Switch>;

const meta: Meta<StoryProps> = {
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    initialState: {
      description: "Change the default state",
    },
    size: {
      options: ["sm", "md", "lg"],
      control: "select",
      description: "Change the size",
    },
    bgColorOn: {
      description: "Change the bg color when switch is on",
    },
    bgColorOff: {
      description: "Change the bg color when switch is off",
    },
    gapColorOn: {
      description: "Change the gap color inside the nut when switch is on",
    },
    gapColorOff: {
      description: "Change the gap color inside the nut when switch is off",
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const DefaultOff: Story = {
  render: ({ ...args }) => <Switch {...args} initialState={false} />,
};

export const DefaultOn: Story = {
  render: ({ ...args }) => <Switch {...args} initialState={true} />,
};

export const Small: Story = {
  render: ({ ...args }) => <Switch {...args} size="sm" />,
};

export const Medium: Story = {
  render: ({ ...args }) => <Switch {...args} size="md" />,
};

export const Large: Story = {
  render: ({ ...args }) => <Switch {...args} size="lg" />,
};
