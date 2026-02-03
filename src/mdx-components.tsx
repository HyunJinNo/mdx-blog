import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaRegClipboard } from "@react-icons/all-files/fa/FaRegClipboard";
import { FaCircle } from "@react-icons/all-files/fa/FaCircle";
import { FaRegLightbulb } from "@react-icons/all-files/fa/FaRegLightbulb";
import { MdInfo } from "@react-icons/all-files/md/MdInfo";
import { MdError } from "@react-icons/all-files/md/MdError";
import { IoIosWarning } from "@react-icons/all-files/io/IoIosWarning";

const components = {
  a: ({ children, href }) => (
    <Link
      className="text-custom-blue border-b border-b-gray-200 underline-offset-4 hover:text-teal-500 hover:underline"
      href={href}
    >
      {children}
    </Link>
  ),
  blockquote: (props) => {
    const promptType =
      props.children[1].props.children.props.children.props.children;

    if (
      promptType !== "Tips" &&
      promptType !== "Environment" &&
      promptType !== "Info." &&
      promptType !== "Tags" &&
      promptType !== "Caution"
    ) {
      return (
        <blockquote className="mt-2 mb-4 flex flex-row items-center gap-3 rounded-xl bg-[#F8D7DA8F] p-4 text-[#2E2E2EC4]">
          <IoIosWarning className="text-xl text-[#DF3C30]" />
          잘못된 PromptType입니다.
        </blockquote>
      );
    }

    return (
      <blockquote
        className={[
          promptType === "Tips" && "bg-[#7BF79033]",
          (promptType === "Environment" ||
            promptType === "Info." ||
            promptType === "Tags") &&
            "bg-[#E1F5FE]",
          promptType === "Caution" && "bg-[#FFF3CD]",
          "relative mt-2 mb-4 flex flex-col -space-y-4 rounded-xl pt-4 pr-4 pl-12 text-[#2E2E2EC4]",
        ].join(" ")}
      >
        {promptType === "Tips" && (
          <FaRegLightbulb className="absolute top-5.25 left-4.5 text-lg text-[#03B303]" />
        )}
        {(promptType === "Environment" ||
          promptType === "Info." ||
          promptType === "Tags") && (
          <MdInfo className="absolute top-5.25 left-4.5 text-xl text-[#0070CB]" />
        )}
        {promptType === "Caution" && (
          <MdError className="absolute top-5.25 left-4.5 text-xl text-[#EF9C03]" />
        )}

        {props.children}
      </blockquote>
    );
  },
  code: ({ children }) => (
    <code className="rounded-md bg-[#E7F3F8] px-1.25 py-0.75 text-sm font-normal text-[#337EA9]">
      {children}
    </code>
  ),
  h2: ({ children }) => (
    <h2 className="mt-20 mb-5 border-b border-gray-200 pb-5 text-2xl font-semibold text-black">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-10 mb-4 text-xl font-semibold text-black">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-8 mb-4 text-lg font-semibold text-black">{children}</h4>
  ),
  h5: ({ children }) => (
    <h5 className="mt-6 mb-2 font-semibold text-black">{children}</h5>
  ),
  img: (props) => (
    <span className="my-2 flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...props}
        className="rounded-lg border border-gray-200 shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)]"
        alt={props.alt}
      />
    </span>
  ),
  li: ({ children }) => <li className="py-1 leading-7">{children}</li>,
  ol: ({ children }) => (
    <ol className="marker:text-custom-gray mb-4 list-decimal pl-7">
      {children}
    </ol>
  ),
  p: ({ children }) => <p className="pb-4 leading-7">{children}</p>,
  pre: (props) => {
    const language =
      props.children.props?.className.split("-")[1] ?? "plaintext";

    return (
      <div className="mt-2 mb-5 flex flex-col rounded-xl border border-gray-200 bg-white p-1 text-sm leading-5.5 shadow">
        <div className="flex h-9 flex-row items-center justify-between px-2 text-[#a3a3a3]">
          <div className="flex flex-row items-center gap-1.5 text-xs text-[#e5e5e5]">
            <FaCircle />
            <FaCircle />
            <FaCircle />
          </div>
          <div className="flex flex-row items-center gap-1 font-normal">
            <FaCode />
            {language}
          </div>
          <FaRegClipboard className="text-base" />
        </div>
        <SyntaxHighlighter
          language={language}
          style={vs}
          showLineNumbers={true}
          lineNumberStyle={{
            paddingLeft: "0.5rem",
            marginRight: "1rem",
            color: "#757575",
            width: "1.5rem",
          }}
          customStyle={{ backgroundColor: "transparent" }}
        >
          {props.children.props?.children.trim()}
        </SyntaxHighlighter>
      </div>
    );
  },
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  table: ({ children }) => <table className="mb-6">{children}</table>,
  td: ({ children }) => <td className="px-4">{children}</td>,
  th: ({ children }) => (
    <th className="bg-white px-4 text-start">{children}</th>
  ),
  thead: ({ children }) => (
    <thead className="h-10 border-b-2 border-gray-200">{children}</thead>
  ),
  tr: ({ children }) => (
    <tr className="h-10 border-b border-gray-200 odd:bg-[#FBFCFD]">
      {children}
    </tr>
  ),
  ul: ({ children }) => (
    <ul className="marker:text-custom-gray list-disc pl-7">{children}</ul>
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
