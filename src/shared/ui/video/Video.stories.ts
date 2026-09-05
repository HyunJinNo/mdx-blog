import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Video } from "./Video";

const meta = {
  title: "shared/Video",
  component: Video,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Video>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    src: "/videos/front-end/react-native-splash-screen/video1.webm",
    type: "video/webm",
    width: 360,
  },
} satisfies Story;
