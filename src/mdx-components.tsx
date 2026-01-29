import type { MDXComponents } from "mdx/types";

const components = {
  blockquote: ({ children }) => (
    <blockquote className="flex flex-col -space-y-4 rounded-xl bg-[#E1F5FE] pt-4 pr-4 pl-12 text-[#2E2E2EC4]">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded-md bg-[#e7f3f8] px-1 py-0.5 text-sm font-normal text-[#337ea9]">
      {children}
    </code>
  ),
  h2: ({ children }) => (
    <h2 className="mt-20 mb-5 border-b border-gray-200 pb-5 text-2xl font-semibold text-black">
      {children}
    </h2>
  ),
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      className="rounded-lg border border-gray-200 shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)]"
      alt={props.alt}
    />
  ),
  p: ({ children }) => <p className="pb-4 leading-7">{children}</p>,
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
