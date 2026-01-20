"use client";

import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";

export const EmailLink = () => {
  const handleClick = () => {
    window.location.href = `mailto:nhj9831@naver.com`;
  };

  return (
    <a
      className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-white text-black/50 duration-300 hover:bg-white/50 hover:text-white"
      href="#"
      onClick={handleClick}
      aria-label="email"
    >
      <FaEnvelope />
    </a>
  );
};
