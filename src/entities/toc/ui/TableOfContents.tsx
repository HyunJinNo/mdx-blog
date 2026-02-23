"use client";

import { usePathname } from "next/navigation";
import { useTableOfContents } from "../model/useTableOfContents";
import { TocList } from "./TocList";

export const TableOfContents = () => {
  const pathname = usePathname();
  const { activeId, headingList } = useTableOfContents();

  if (!pathname.startsWith("/posts")) {
    return null;
  }

  return (
    <section className="animate-fade-up sticky top-12 flex w-full flex-col gap-4 border-l border-gray-200 pb-4">
      <h2 className="pl-4 font-medium text-[#585858]">Contents</h2>
      <nav className="text-custom-gray text-sm">
        <ul className="flex flex-col gap-2.5">
          {headingList.map((heading) => (
            <TocList key={heading.id} activeId={activeId} tocNode={heading} />
          ))}
        </ul>
      </nav>
    </section>
  );
};
