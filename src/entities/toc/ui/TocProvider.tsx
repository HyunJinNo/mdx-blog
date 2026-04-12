"use client";

import { TocProvider as BaseTocProvider } from "@hyunjinno/react-toc";
import { usePathname } from "next/navigation";

interface TocProviderProps {
  children: React.ReactNode;
}

export const TocProvider = ({ children }: TocProviderProps) => {
  const pathname = usePathname();

  return (
    <BaseTocProvider className="w-full" deps={[pathname]}>
      {children}
    </BaseTocProvider>
  );
};
