"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./breadcrumb";

export const AppBreadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((value) => value !== "posts")
    .map(decodeURIComponent);

  return (
    <Breadcrumb className="laptop:block hidden min-w-0">
      <BreadcrumbList>
        <BreadcrumbItem>
          {segments.length === 0 ? (
            <BreadcrumbPage className="text-custom-gray">Home</BreadcrumbPage>
          ) : (
            <BreadcrumbLink
              className="custom-link"
              render={
                <Link className="" href="/">
                  Home
                </Link>
              }
            />
          )}
        </BreadcrumbItem>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          return (
            <div className="flex flex-row items-center gap-1.5" key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-custom-gray">
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    render={
                      <Link className="custom-link" href={href}>
                        {segment.charAt(0).toUpperCase() + segment.slice(1)}
                      </Link>
                    }
                  />
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
