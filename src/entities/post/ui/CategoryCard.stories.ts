import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CategoryCard } from "./CategoryCard";

const meta = {
  title: "entities/CategoryCard",
  component: CategoryCard,
  tags: ["autodocs"],
} satisfies Meta<typeof CategoryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: "Algorithms",
    count: 18,
    categoryPath: "Algorithms",
  },
} satisfies Story;
