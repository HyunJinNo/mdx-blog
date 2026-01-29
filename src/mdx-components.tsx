import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components = {
  a: ({ children, href }) => (
    <Link
      className="text-custom-blue border-b border-b-gray-200 underline-offset-4 hover:text-teal-500 hover:underline"
      href={href}
    >
      {children}
    </Link>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-2 mb-4 flex flex-col -space-y-4 rounded-xl bg-[#E1F5FE] pt-4 pr-4 pl-12 text-[#2E2E2EC4]">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded-md bg-[#e7f3f8] px-1.25 py-0.75 text-sm font-normal text-[#337ea9]">
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
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      className="rounded-lg border border-gray-200 shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)]"
      alt={props.alt}
    />
  ),
  li: ({ children }) => <li className="py-1">{children}</li>,
  p: ({ children }) => <p className="pb-4 leading-7">{children}</p>,
  pre: (props) => (
    <pre className="mt-2 mb-5 overflow-x-auto rounded-xl bg-[#f6f8fa] p-4 text-sm">
      {props.children.props?.children}
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  ul: ({ children }) => (
    <ul className="marker:text-custom-gray list-disc pl-7">{children}</ul>
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
