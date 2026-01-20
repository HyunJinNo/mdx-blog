"use client";

import { FaAdjust } from "@react-icons/all-files/fa/FaAdjust";

export const ToggleThemeButton = () => {
  const handleClick = () => {
    // TODO
  };

  return (
    <button
      className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-white text-black/50 duration-300 hover:bg-white/50 hover:text-white"
      onClick={handleClick}
    >
      <FaAdjust />
    </button>
  );
};
