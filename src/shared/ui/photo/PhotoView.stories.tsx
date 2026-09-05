import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PhotoView } from "./PhotoView";
import { PhotoProvider } from "./PhotoProvider";

const meta = {
  title: "shared/PhotoView",
  component: PhotoView,
  tags: ["autodocs"],
} satisfies Meta<typeof PhotoView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  decorators: (Story) => (
    <PhotoProvider>
      <span className="my-2 flex items-center justify-center">
        <Story />
      </span>
    </PhotoProvider>
  ),
  args: {
    src: "/images/front-end/front-end.avif",
    children: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className="cursor-zoom-in rounded-lg border border-gray-200 shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)]"
        src="/images/front-end/front-end.avif"
        alt="PhotoView_EXAMPLE"
        loading="lazy"
        sizes="(max-width: 850px): 100vw, 80vw"
      />
    ),
  },
} satisfies Story;
