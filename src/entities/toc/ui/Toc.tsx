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
      headingClassName="text-[#585858]"
      linkClassName="text-sm text-custom-gray"
      expandDepth={2}
    />
  );
};
