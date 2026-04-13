"use client";

import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";

export const EmailLink = () => {
  const handleClick = () => {
    window.location.href = `mailto:nhj9831@naver.com`;
  };

  return (
    <a
      className="custom-button-link"
      href="#"
      onClick={handleClick}
      aria-label="email"
    >
      <FaEnvelope />
    </a>
  );
};
