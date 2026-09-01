import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NavItem } from "./NavItem";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import Image from "next/image";

const meta = {
  title: "shared/NavItem",
  component: NavItem,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  decorators: (Story) => (
    <div className="flex h-full items-center justify-center p-4 text-white/80">
      <Image
        className="absolute -z-10 h-full w-full object-cover"
        src="/images/background.avif"
        alt="background"
        fetchPriority="high"
        loading="eager"
        fill={true}
      />
      <Story />
    </div>
  ),
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/categories",
      },
    },
  },
  args: {
    title: "HOME",
    href: "/",
    children: <FaHome />,
  },
} satisfies Story;

export const Active = {
  decorators: (Story) => (
    <div className="flex h-full items-center justify-center p-4 text-white/80">
      <Image
        className="absolute -z-10 h-full w-full object-cover"
        src="/images/background.avif"
        alt="background"
        fetchPriority="high"
        loading="eager"
        fill={true}
      />
      <Story />
    </div>
  ),
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
  },
  args: {
    title: "HOME",
    href: "/",
    children: <FaHome />,
  },
} satisfies Story;
