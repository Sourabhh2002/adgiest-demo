import { ComponentProps } from "react";
import RangeSlider from "./RangeSlider";
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof RangeSlider>;

const meta: Meta<StoryProps> = {
  component: RangeSlider,
  tags: ["autodocs"],
  argTypes: {
    accentColor: {
      control: "color",
      description: "Change the color inside the range",
    },
    basicColor: {
      control: "color",
      description: "Change the color outside the range",
    },
    peakHeight: {
      description: "Change the height of the graph",
    },
    curveType: {
      control: "select",
      description: "Handle the nature of the graph",
    },
    initialRange: {
      table: {
        disable: true,
      },
    },
    minRange: {
      description: "Change the minimum threshold distance between two handles",
    },
    width: {
      description: "Change the width of the graph",
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Linear: Story = {
  args: {
    accentColor: "#63AA75",
    basicColor: "#CCCCCC",
  },
  render: ({ ...args }) => <RangeSlider {...args} />,
};

export const Basis: Story = {
  args: {
    accentColor: "#63AA75",
    basicColor: "#CCCCCC",
    curveType: "basis",
  },
  render: ({ ...args }) => <RangeSlider {...args} />,
};

export const Natural: Story = {
  args: {
    accentColor: "#63AA75",
    basicColor: "#CCCCCC",
    curveType: "natural",
  },
  render: ({ ...args }) => <RangeSlider {...args} />,
};

export const Cardinal: Story = {
  args: {
    accentColor: "#63AA75",
    basicColor: "#CCCCCC",
    curveType: "cardinal",
  },
  render: ({ ...args }) => <RangeSlider {...args} />,
};
