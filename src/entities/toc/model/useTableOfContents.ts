"use client";

import { usePathname } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";
import { TocNode } from "./tocNode";

export const useTableOfContents = () => {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("");
  const [headingList, setHeadingList] = useState<TocNode[]>([]);

  const updateHeadingList = useEffectEvent((arr: TocNode[]) => {
    setHeadingList(arr);
  });

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

    const arr: TocNode[] = [];

    for (const element of document.body.getElementsByTagName("main")[0]
      .children) {
      switch (element.tagName) {
        case "H2":
          arr.push({
            tagName: element.tagName,
            textContent: element.textContent,
            id: element.id,
            children: [],
          });
          observer.observe(element);
          break;
        case "H3":
          arr[arr.length - 1].children.push({
            tagName: element.tagName,
            textContent: element.textContent,
            id: element.id,
            children: [],
          });
          observer.observe(element);
          break;
        case "H4":
          arr[arr.length - 1].children[
            arr[arr.length - 1].children.length - 1
          ].children.push({
            tagName: element.tagName,
            textContent: element.textContent,
            id: element.id,
            children: [],
          });
          observer.observe(element);
          break;
        case "H5":
          arr[arr.length - 1].children[
            arr[arr.length - 1].children.length - 1
          ].children[
            arr[arr.length - 1].children[
              arr[arr.length - 1].children.length - 1
            ].children.length - 1
          ].children.push({
            tagName: element.tagName,
            textContent: element.textContent,
            id: element.id,
            children: [],
          });
          observer.observe(element);
          break;
        default:
          break;
      }
    }

    updateHeadingList(arr);

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return { activeId, headingList };
};
