"use client";

import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { SearchInput } from "@/features/searchPostListByTitle";
import { Breadcrumb } from "@/shared/ui/breadcrumb";
import { useHeaderTitle } from "../model/useHeaderTitle";
import { HeaderMenuButton } from "./HeaderMenuButton";
import { useState } from "react";

export const Header = () => {
  const { headerTitle } = useHeaderTitle();
  const [isSearching, setIsSearching] = useState(false);

  if (isSearching) {
    return (
      <header className="desktop:pr-20 flex h-12 w-full flex-row items-center justify-between gap-3">
        <SearchInput />
        <button
          className="text-custom-blue"
          onClick={() => setIsSearching(false)}
        >
          Cancel
        </button>
      </header>
    );
  }

  return (
    <header className="desktop:pr-20 flex h-12 w-full flex-row items-center justify-between">
      <Breadcrumb />
      <HeaderMenuButton />
      <div className="laptop:hidden text-custom-gray text-lg font-medium">
        {headerTitle}
      </div>
      <button className="laptop:hidden" onClick={() => setIsSearching(true)}>
        <FaSearch className="text-custom-gray" />
      </button>
      <div className="laptop:block hidden">
        <SearchInput />
      </div>
    </header>
  );
};
