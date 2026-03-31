"use client";

import { SmallTag } from "@/shared/ui/tag";
import { FaFolderOpen } from "@react-icons/all-files/fa/FaFolderOpen";
import { FaTags } from "@react-icons/all-files/fa/FaTags";
import { FaLink } from "@react-icons/all-files/fa/FaLink";
import Link from "next/link";
import { useClipboard } from "@/shared/lib/hooks";

interface PostTailWrapperProps {
  categoryTitle: string;
  tagList: string[];
}

export const PostTailWrapper = ({
  categoryTitle,
  tagList,
}: PostTailWrapperProps) => {
  const { copied, copy } = useClipboard();

  return (
    <div className="text-custom-gray mt-20">
      <div className="flex flex-row items-center gap-2">
        <FaFolderOpen />
        <Link
          className="text-custom-blue border-b border-b-gray-200 text-sm underline-offset-5 hover:text-teal-500 hover:underline dark:text-blue-300"
          href={`/categories/${categoryTitle}`}
        >
          {categoryTitle}
        </Link>
      </div>
      <div className="mt-4 flex flex-row gap-2">
        <FaTags className="mt-1 shrink-0" />
        <div className="flex flex-wrap items-center gap-2">
          {tagList.map((tag) => (
            <SmallTag key={tag} tagName={tag} />
          ))}
        </div>
      </div>
      <div className="tablet:flex-row tablet:items-center mt-12 flex flex-col-reverse justify-between gap-2 border-b border-b-gray-200 pb-2 text-sm">
        <div>
          This post is licensed under{" "}
          <a
            className="font-medium underline-offset-4 hover:text-teal-500 hover:underline"
            href="https://creativecommons.org/licenses/by/4.0/"
          >
            CC BY 4.0
          </a>{" "}
          by the author.
        </div>
        <div className="flex flex-row items-center gap-2">
          공유하기:
          <button
            className="hover:text-custom-blue group relative"
            aria-label="클립보드에 복사"
            onClick={() => copy(window.location.href)}
          >
            <FaLink className="text-base" />
            <span
              className={[
                copied ? "w-40" : "w-20",
                "after:content-[' '] invisible absolute bottom-7 left-1/2 -translate-x-1/2 rounded-md bg-black p-2 text-xs text-white group-hover:visible after:absolute after:top-full after:left-1/2 after:-ml-1.25 after:border-[0.3125rem] after:border-transparent after:border-t-black",
              ].join(" ")}
            >
              {copied ? "Link copied successfully!" : "Copy Link"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
