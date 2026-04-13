"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

export const Breadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((value) => value !== "posts")
    .map(decodeURIComponent);

  return (
    <nav className="laptop:block hidden min-w-0">
      <ol className="flex flex-row items-center gap-2">
        <li>
          {segments.length === 0 ? (
            <span className="text-custom-gray">Home</span>
          ) : (
            <Link className="custom-link" href="/">
              Home
            </Link>
          )}
        </li>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          return (
            <li key={href} className="flex min-w-0 flex-row items-center gap-2">
              <FaChevronRight className="text-custom-gray text-[0.5rem]" />
              {isLast ? (
                <span className="text-custom-gray truncate">
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </span>
              ) : (
                <Link className="custom-link" href={href}>
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
