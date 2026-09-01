import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CopyButton } from "./CopyButton";

const meta = {
  title: "shared/CopyButton",
  component: CopyButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    text: "TEXT_EXAMPLE",
  },
} satisfies Meta<typeof CopyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
