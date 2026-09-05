import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PostCard } from "./PostCard";

const meta = {
  title: "entities/PostCard",
  component: PostCard,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PostCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: "commitlint + Husky 사용법",
    description: "commitlint + Husky 사용법을 정리한 페이지입니다.",
    date: new Date("2026-04-13"),
    category: "기타",
    imagePath: "/images/etc/commitlint-husky/github-log.avif",
    postPath: "2026-04-13-commitlint-husky",
  },
} satisfies Story;
