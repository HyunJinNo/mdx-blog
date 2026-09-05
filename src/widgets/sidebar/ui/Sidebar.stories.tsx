import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Sidebar } from "./Sidebar";

const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
