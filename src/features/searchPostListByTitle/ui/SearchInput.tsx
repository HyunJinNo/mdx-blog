"use client";

import { useEffect } from "react";
import { useSearchInputStore } from "../model/searchInputStore";
import { usePathname } from "next/navigation";

export const SearchInput = () => {
  const { input, initialize, setSearchInputState } = useSearchInputStore();
  const pathname = usePathname();

  useEffect(() => {
    initialize();
  }, [initialize, pathname]);

  return (
    <input
      className="h-8 w-50 rounded-2xl pr-4 pl-9 outline-1 -outline-offset-2 outline-gray-200 focus:outline-gray-400"
      type="search"
      autoComplete="off"
      placeholder="Search..."
      value={input}
      onChange={(event) => setSearchInputState({ input: event.target.value })}
    />
  );
};
