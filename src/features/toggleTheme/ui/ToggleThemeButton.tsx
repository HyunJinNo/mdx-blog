"use client";

import { FaAdjust } from "@react-icons/all-files/fa/FaAdjust";

export const ToggleThemeButton = () => {
  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-white text-black/50 duration-300 hover:bg-white/50 hover:text-white"
      onClick={toggleTheme}
    >
      <FaAdjust />
    </button>
  );
};
