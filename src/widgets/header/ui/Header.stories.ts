import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header } from "./Header";

const meta = {
  title: "widgets/Header",
  component: Header,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OnDesktop = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
  },
} satisfies Story;

export const OnTablet = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
  },
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
} satisfies Story;
