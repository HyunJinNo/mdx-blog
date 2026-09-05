import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PostTailWrapper } from "./PostTailWrapper";

const meta = {
  title: "widgets/PostTailWrapper",
  component: PostTailWrapper,
  tags: ["autodocs"],
} satisfies Meta<typeof PostTailWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    categoryTitle: "Front-end",
    tagList: ["monorepo", "nextra", "nextjs", "pnpm", "react", "tsdown"],
  },
} satisfies Story;
