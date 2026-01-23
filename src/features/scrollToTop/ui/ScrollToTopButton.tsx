import { FaChevronUp } from "@react-icons/all-files/fa/FaChevronUp";

export const ScrollToTopButton = () => {
  return (
    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 shadow duration-300 hover:-translate-y-1">
      <FaChevronUp className="text-custom-gray" />
    </button>
  );
};
