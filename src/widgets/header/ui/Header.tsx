"use client";

import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { SearchInput } from "@/features/searchPostListByTitle";
import { AppBreadcrumb } from "@/shared/ui/breadcrumb";
import { useHeaderTitle } from "../model/useHeaderTitle";
import { useState } from "react";
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
  const { headerTitle } = useHeaderTitle();
  const [isSearching, setIsSearching] = useState(false);

  if (isSearching) {
    return (
      <header className="desktop:pr-20 flex h-12 w-full flex-row items-center justify-between gap-3">
        <SearchInput />
        <button
          className="text-custom-blue"
          aria-label="블로그 게시글 검색 취소"
          onClick={() => setIsSearching(false)}
        >
          Cancel
        </button>
      </header>
    );
  }

  return (
    <header className="desktop:pr-20 flex h-12 w-full flex-row items-center justify-between">
      <AppBreadcrumb />
      <HeaderMenu />
      <div className="laptop:hidden text-custom-gray text-lg font-medium">
        {headerTitle}
      </div>
      <button
        className="laptop:hidden"
        aria-label="블로그 게시글 검색"
        onClick={() => setIsSearching(true)}
      >
        <FaSearch className="text-custom-gray" />
      </button>
      <div className="laptop:block hidden">
        <SearchInput />
      </div>
    </header>
  );
};
