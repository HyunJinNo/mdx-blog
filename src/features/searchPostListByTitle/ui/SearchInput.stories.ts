import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SearchInput } from "./SearchInput";

const meta = {
  title: "features/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
