import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EmailLink } from "./EmailLink";

const meta = {
  title: "shared/EmailLink",
  component: EmailLink,
  tags: ["autodocs"],
  decorators: (Story) => (
    <div className="flex items-center justify-center bg-black p-4">
      <Story />
    </div>
  ),
} satisfies Meta<typeof EmailLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
