"use client";

import { usePathname } from "next/navigation";
import { useTableOfContents } from "../model/useTableOfContents";

export const TableOfContents = () => {
  const pathname = usePathname();
  const { activeId, headingList } = useTableOfContents();

  if (!pathname.startsWith("/posts")) {
    return null;
  }

  return (
    <section className="animate-fade-up sticky top-12 flex w-full flex-col gap-4 border-l border-gray-200 pb-4">
      <h2 className="pl-4 font-medium text-[#585858]">Contents</h2>
      <nav>
        <ul className="text-custom-gray flex flex-col gap-2.5 text-sm">
          {headingList.map((heading) => (
            <li
              key={heading.id}
              className="border-custom-blue -ml-px truncate border-l pl-4"
            >
              <a
                className={[
                  heading.tagName === "H3" && "pl-3",
                  heading.tagName === "H4" && "pl-6",
                  heading.tagName === "H5" && "pl-9",
                  activeId === heading.id && "text-custom-blue font-medium",
                  "hover:text-custom-blue",
                ].join(" ")}
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();

                  const element = document.getElementById(heading.id);

                  if (element) {
                    // 요소의 위치를 얻어서 위로 스크롤 조정
                    window.scrollTo({
                      top: element.offsetTop - 30,
                      behavior: "smooth",
                    });

                    window.history.pushState(null, "", `#${heading.id}`);
                  }
                }}
              >
                {heading.textContent}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
