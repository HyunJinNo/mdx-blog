import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Comment } from "./Comment";

const meta = {
  title: "features/Comment",
  component: Comment,
  tags: ["autodocs"],
} satisfies Meta<typeof Comment>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
