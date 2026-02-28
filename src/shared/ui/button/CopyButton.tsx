"use client";

import { useClipboard } from "@/shared/lib/hooks";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { FaRegClipboard } from "@react-icons/all-files/fa/FaRegClipboard";

interface CopyButtonProps {
  text: string;
}

export const CopyButton = ({ text }: CopyButtonProps) => {
  const { copied, copy } = useClipboard();

  return (
    <button
      className="flex h-9 w-9 items-center justify-center text-base hover:text-teal-500"
      aria-label="클립보드에 복사"
      onClick={() => copy(text)}
    >
      {copied ? <FaCheck className="text-teal-500" /> : <FaRegClipboard />}
    </button>
  );
};
