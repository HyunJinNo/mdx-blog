"use client";

import { Toc as BaseToc } from "@hyunjinno/react-toc";
import { usePathname } from "next/navigation";

export const Toc = () => {
  const pathname = usePathname();

  if (!pathname.startsWith("/posts")) {
    return null;
  }

  return (
    <BaseToc
      className="animate-fade-up sticky top-12"
      headingClassName="custom-label"
      linkClassName="text-sm text-custom-gray dark:hover:text-blue-300!"
      activeClassName="dark:text-blue-300! dark:border-blue-300!"
      expandDepth={2}
    />
  );
};
