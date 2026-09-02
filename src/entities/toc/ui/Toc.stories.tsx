import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toc } from "./Toc";
import { TocProvider } from "./TocProvider";
import { H2, H3 } from "@hyunjinno/react-toc/heading";

const meta = {
  title: "entities/toc/Toc",
  component: Toc,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/posts/2026-04-13-commitlint-husky",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toc>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  decorators: (Story) => (
    <TocProvider>
      <div className="hidden">
        <H2>1. 개요</H2>
        <H2>2. commitlint 사용하기</H2>
        <H3>2.1. commitlint 설치하기</H3>
        <H3>2.2. commitlint 설정하기</H3>
        <H3>2.3. Rules 설정하기</H3>
        <H3>2.4. Husky 설치하기</H3>
        <H3>2.5. commit-msg hook 추가하기</H3>
        <H2>3. 참고 자료</H2>
      </div>
      <Story />
    </TocProvider>
  ),
} satisfies Story;
