"use client";

import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { SearchInput } from "@/features/searchPostListByTitle";
import { Breadcrumb } from "@/shared/ui/breadcrumb";
import { useHeaderTitle } from "../model/useHeaderTitle";

export const Header = () => {
  const { headerTitle } = useHeaderTitle();

  return (
    <header className="desktop:pr-20 flex h-12 w-full flex-row items-center justify-between">
      <Breadcrumb />
      <button className="laptop:hidden">
        <FaBars className="text-custom-gray" />
      </button>
      <div className="laptop:hidden text-custom-gray text-lg font-medium">
        {headerTitle}
      </div>
      <button className="laptop:hidden">
        <FaSearch className="text-custom-gray" />
      </button>
      <div className="laptop:block relative hidden w-50">
        <FaSearch className="text-custom-gray/50 absolute top-2 left-3 scale-90" />
        <SearchInput />
      </div>
    </header>
  );
};
