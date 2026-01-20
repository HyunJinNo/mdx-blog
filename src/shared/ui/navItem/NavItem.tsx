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
    <li>
      <Link
        className={[
          pathname === href && "bg-white/50",
          "flex h-10 flex-row items-center gap-6 rounded-xl px-4 duration-300 hover:bg-white/50",
        ].join(" ")}
        href={href}
      >
        {children}
        <span className="text-sm font-semibold tracking-wider">{title}</span>
      </Link>
    </li>
  );
};
