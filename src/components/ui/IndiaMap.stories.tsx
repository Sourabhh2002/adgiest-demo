import { ComponentProps } from "react";
import IndiaMap from "./IndiaMap";
import { Meta, StoryObj } from "@storybook/react";
import { indianStatesAndUTs } from "@/data/indianStates";

type StoryProps = ComponentProps<typeof IndiaMap>;

const meta: Meta<StoryProps> = {
  component: IndiaMap,
  tags: ["autodocs"],
  argTypes: {
    states: {
      options: indianStatesAndUTs,
      control: "multi-select",
    },
    initialFillColor: {
      control: "color",
      description: "Initial fill color for states (bg)",
      defaultValue: "#CCCCCC",
    },
    initialStrokeColor: {
      control: "color",
      description: "Stroke color for states (border)",
      defaultValue: "#918F8F",
    },
    hoverFillColor: {
      control: "color",
      description: "Hover fill color for states (Hovered bg)",
      defaultValue: "#63aa75",
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const DefaultTheme: Story = {
  args: {
    states: [],
    initialFillColor: "#CCCCCC",
    initialStrokeColor: "#918F8F",
    hoverFillColor: "#63aa75",
  },
  render: (args) => <IndiaMap {...args} states={args.states} />,
};

export const MultiSelectedState: Story = {
  args: {
    states: ["Maharashtra", "Haryana", "Assam"],
    initialFillColor: "#CCCCCC",
    initialStrokeColor: "#918F8F",
    hoverFillColor: "#63aa75",
  },
  render: (args) => <IndiaMap {...args} states={args.states} />,
};
