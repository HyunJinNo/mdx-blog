"use client";

import { FaChevronUp } from "@react-icons/all-files/fa/FaChevronUp";
import { useScrollToTop } from "../model/useScrollToTop";

export const ScrollToTopButton = () => {
  const { visible, scrollToTop } = useScrollToTop();

  return (
    <button
      className={[
        !visible && "opacity-0",
        `flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 shadow duration-300 hover:-translate-y-1`,
      ].join(" ")}
      onClick={scrollToTop}
    >
      <FaChevronUp className="text-custom-gray" />
    </button>
  );
};
