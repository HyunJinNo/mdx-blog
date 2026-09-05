import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SmallTag } from "./SmallTag";

const meta = {
  title: "shared/tag/SmallTag",
  component: SmallTag,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SmallTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    tagName: "vscode",
  },
} satisfies Story;
