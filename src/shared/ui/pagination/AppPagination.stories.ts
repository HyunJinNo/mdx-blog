import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AppPagination } from "./AppPagination";

const meta = {
  title: "shared/AppPagination",
  component: AppPagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    totalPages: 15,
  },
} satisfies Meta<typeof AppPagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 5,
    first: false,
    last: false,
  },
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    first: true,
    last: false,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 15,
    first: false,
    last: true,
  },
};
