import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ToggleThemeButton } from "./ToggleThemeButton";

const meta = {
  title: "features/ToggleThemeButton",
  component: ToggleThemeButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleThemeButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
