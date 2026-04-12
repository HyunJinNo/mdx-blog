"use client";

import { TocTopBar as BaseTocTopBar } from "@hyunjinno/react-toc";
import { useEffect, useRef } from "react";

interface TocTopBarProps {
  postTitle: string;
}

export const TocTopBar = ({ postTitle }: TocTopBarProps) => {
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            topBarRef.current?.classList.remove("invisible");
          } else {
            topBarRef.current?.classList.add("invisible");
          }
        });
      },
      { rootMargin: "0px 0px -99% 0px" },
    );

    if (topBarRef.current) {
      observer.observe(topBarRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="laptop:invisible invisible sticky top-0 z-50"
      ref={topBarRef}
    >
      <BaseTocTopBar
        title={postTitle}
        topBarTitleClassName="font-medium"
        listIconClassName="fill-custom-gray scale-125"
        closeIconClassName="fill-custom-gray"
        linkClassName="text-sm text-custom-gray"
        expandAll={true}
      />
    </div>
  );
};
