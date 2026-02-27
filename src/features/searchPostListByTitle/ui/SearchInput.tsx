"use client";

import { useEffect } from "react";
import { useSearchInputStore } from "../model/searchInputStore";
import { usePathname } from "next/navigation";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

export const SearchInput = () => {
  const { input, initialize, setSearchInputState } = useSearchInputStore();
  const pathname = usePathname();

  useEffect(() => {
    initialize();
  }, [initialize, pathname]);

  return (
    <div className="laptop:w-50 relative w-full">
      <FaSearch className="text-custom-gray/50 absolute top-2 left-3 scale-90" />
      <input
        className="h-8 w-full rounded-2xl pr-4 pl-9 outline-1 -outline-offset-2 outline-gray-200 focus:outline-gray-400 dark:text-[#868686]"
        type="search"
        autoComplete="off"
        placeholder="Search..."
        value={input}
        onChange={(event) => setSearchInputState({ input: event.target.value })}
      />
    </div>
  );
};
