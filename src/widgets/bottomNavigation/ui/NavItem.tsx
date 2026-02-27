"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  title: string;
  href: string;
  children?: React.ReactNode;
}

export const NavItem = ({ title, href, children }: NavItemProps) => {
  const pathname = usePathname();

  return (
    <li className="w-full">
      <Link
        className={[
          pathname === href ? "text-custom-blue" : "text-custom-gray",
          "hover:text-custom-blue flex h-14 flex-col items-center justify-center gap-1 hover:bg-gray-200/30",
        ].join(" ")}
        href={href}
      >
        {children}
        <span className="text-sm font-medium tracking-wider">{title}</span>
      </Link>
    </li>
  );
};
