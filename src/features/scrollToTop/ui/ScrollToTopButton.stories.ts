import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScrollToTopButton } from "./ScrollToTopButton";
import { fn, mocked } from "storybook/test";
import { useScrollToTop } from "../model/useScrollToTop";

const meta = {
  title: "features/ScrollToTopButton",
  component: ScrollToTopButton,
  tags: ["autodocs"],
  beforeEach: () => {
    mocked(useScrollToTop).mockReturnValue({
      visible: true,
      scrollToTop: fn(),
    });
  },
} satisfies Meta<typeof ScrollToTopButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
