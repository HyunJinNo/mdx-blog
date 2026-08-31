"use client";

import { SmallTag } from "@/shared/ui/tag";
import { FaFolderOpen } from "@react-icons/all-files/fa/FaFolderOpen";
import { FaTags } from "@react-icons/all-files/fa/FaTags";
import Link from "next/link";
import { useClipboard } from "@/shared/lib/hooks";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui/tooltip";
import { Check, Link as LinkIcon } from "lucide-react";

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
          className="custom-link border-b border-b-gray-200 text-sm underline-offset-5"
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
          <Tooltip>
            {copied ? (
              <Check className="h-4 w-4 text-teal-500" />
            ) : (
              <TooltipTrigger
                render={
                  <button
                    className="hover:text-custom-blue"
                    aria-label="클립보드에 복사"
                  >
                    <LinkIcon
                      className="h-4 w-4"
                      onClick={() => copy(window.location.href)}
                    />
                  </button>
                }
              />
            )}

            <TooltipContent>
              <p>Copy Link</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
