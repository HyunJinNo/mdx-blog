import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AppBreadcrumb } from "./AppBreadcrumb";

const meta = {
  title: "shared/AppBreadcrumb",
  component: AppBreadcrumb,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppBreadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Home = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
  },
} satisfies Story;

export const Categories = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/categories/Front-end",
      },
    },
  },
} satisfies Story;

export const Posts = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/posts/2026-04-13-commitlint-husky",
      },
    },
  },
} satisfies Story;
