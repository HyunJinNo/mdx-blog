import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BottomNavigation } from "./BottomNavigation";

const meta = {
  title: "widgets/BottomNavigation",
  component: BottomNavigation,
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
} satisfies Meta<typeof BottomNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
