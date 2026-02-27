"use client";

import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { SearchInput } from "@/features/searchPostListByTitle";
import { Breadcrumb } from "@/shared/ui/breadcrumb";
import { useHeaderTitle } from "../model/useHeaderTitle";
import { HeaderMenuButton } from "./HeaderMenuButton";

export const Header = () => {
  const { headerTitle } = useHeaderTitle();

  return (
    <header className="desktop:pr-20 flex h-12 w-full flex-row items-center justify-between">
      <Breadcrumb />
      <HeaderMenuButton />
      <div className="laptop:hidden text-custom-gray text-lg font-medium">
        {headerTitle}
      </div>
      <button className="laptop:hidden">
        <FaSearch className="text-custom-gray" />
      </button>
      <SearchInput />
    </header>
  );
};
