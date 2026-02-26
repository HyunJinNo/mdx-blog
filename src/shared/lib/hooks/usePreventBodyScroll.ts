"use client";

import { useEffect } from "react";

export const usePreventBodyScroll = (dependency: boolean) => {
  useEffect(() => {
    if (!dependency) {
      return;
    }

    const body = document.getElementsByTagName("body")[0];
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";
    body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = "auto";
      body.style.paddingRight = "0px";
    };
  }, [dependency]);
};
