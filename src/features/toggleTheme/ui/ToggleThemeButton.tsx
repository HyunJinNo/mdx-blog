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
      className="custom-button-link"
      aria-label="테마 전환"
      onClick={toggleTheme}
    >
      <FaAdjust />
    </button>
  );
};
