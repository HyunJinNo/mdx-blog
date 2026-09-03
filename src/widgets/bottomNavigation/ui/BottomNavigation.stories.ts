import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BottomNavigation } from "./BottomNavigation";

const meta = {
  title: "widgets/BottomNavigation",
  component: BottomNavigation,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
} satisfies Meta<typeof BottomNavigation>;

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
        pathname: "/categories",
      },
    },
  },
} satisfies Story;

export const Tags = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/tags",
      },
    },
  },
} satisfies Story;

export const Archives = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/archives",
      },
    },
  },
} satisfies Story;
