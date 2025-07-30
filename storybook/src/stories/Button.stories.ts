import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args : {
    children : 'Button', 
    variant: "primary",
    size: "medium",
    disabled: false, 
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    variant: {
      control: "select",
    },
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
    args : {
     
        variant: "secondary",
    }
};

export const Destructive: Story = {
    args : {
        variant: "destructive",
    }
};


export const Small: Story = {
  args: {
    size: "small",
  },
};
export const Medium: Story = {
  args: {
    size: "medium",
  },
};
export const Large: Story = {
  args: {
    size: "large",
  },
};  