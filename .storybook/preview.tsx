import "@/app/globals.css";
import type { Preview } from "@storybook/nextjs-vite";
import localFont from "next/font/local";

const pretendardFont = localFont({
  src: [
    {
      path: "../src/app/Pretendard-Light.subset.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../src/app/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../src/app/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../src/app/Pretendard-Black.custom-subset.woff2",
      weight: "900",
      style: "Black",
    },
  ],
  display: "swap",
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={pretendardFont.className}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
