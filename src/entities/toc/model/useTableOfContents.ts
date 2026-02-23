"use client";

import { usePathname } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";

export const useTableOfContents = () => {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("");
  const [headingList, setHeadingList] = useState<
    { tagName: string; textContent: string; id: string }[]
  >([]);

  const updateHeadingList = useEffectEvent(
    (arr: { tagName: string; textContent: string; id: string }[]) => {
      setHeadingList(arr);
    },
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" },
    );

    const arr = [];

    for (const element of document.body.getElementsByTagName("main")[0]
      .children) {
      if (["H2", "H3", "H4", "H5"].includes(element.tagName)) {
        arr.push({
          tagName: element.tagName,
          textContent: element.textContent,
          id: element.id,
        });
        observer.observe(element);
      }
    }

    updateHeadingList(arr);

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return { activeId, headingList };
};
