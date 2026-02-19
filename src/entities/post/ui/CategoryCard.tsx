import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import { FaRegFolder } from "@react-icons/all-files/fa/FaRegFolder";
import Link from "next/link";

export const CategoryCard = () => {
  return (
    <div className="flex h-13 w-full flex-row items-center justify-between rounded-lg border border-gray-200 bg-[#21252908] pr-3 pl-5">
      <div className="flex flex-row items-center gap-3">
        <FaRegFolder className="text-gray-400" />
        <Link
          className="text-custom-blue underline-offset-4 hover:text-teal-500 hover:underline"
          href="/categories/Algorithms"
        >
          Algorithms
        </Link>
        <span className="text-custom-gray text-sm">18 posts</span>
      </div>
      <FaChevronRight className="text-sm text-gray-400" />
    </div>
  );
};
