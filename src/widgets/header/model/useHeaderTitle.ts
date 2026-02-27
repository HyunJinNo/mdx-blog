"use client";

import { usePathname } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";

export const useHeaderTitle = () => {
  const pathname = usePathname();
  const [headerTitle, setHeaderTitle] = useState("노현진's Blog");

  const updateHeaderTitle = useEffectEvent((title: string) => {
    setHeaderTitle(title);
  });

  useEffect(() => {
    if (pathname.startsWith("/posts")) {
      updateHeaderTitle("Post");
    } else if (pathname === "/categories") {
      updateHeaderTitle("Categories");
    } else if (pathname.startsWith("/categories/")) {
      updateHeaderTitle("Category");
    } else if (pathname === "/tags") {
      updateHeaderTitle("Tags");
    } else if (pathname.startsWith("/tags/")) {
      updateHeaderTitle("Tag");
    } else if (pathname.startsWith("/archives")) {
      updateHeaderTitle("Archives");
    } else {
      updateHeaderTitle("노현진's Blog");
    }
  }, [pathname]);

  return { headerTitle };
};
