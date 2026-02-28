"use client";

import { useState } from "react";

export const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      return false;
    }
  };

  return { copied, copy };
};
