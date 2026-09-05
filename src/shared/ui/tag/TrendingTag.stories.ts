import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TrendingTag } from "./TrendingTag";

const meta = {
  title: "shared/tag/TrendingTag",
  component: TrendingTag,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TrendingTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    tagName: "typescript",
  },
} satisfies Story;
