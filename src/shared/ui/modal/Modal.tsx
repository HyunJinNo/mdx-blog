"use client";

import { useModalBackHandler, usePreventBodyScroll } from "@/shared/lib/hooks";
import React, { useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal = ({ children, isOpen, closeModal }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useModalBackHandler(isOpen, closeModal);
  usePreventBodyScroll(isOpen);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      className="fixed top-0 left-0 z-100 flex h-full w-full items-center justify-center bg-black/30"
      ref={ref}
      onClick={(e) => {
        if (e.target === ref.current) {
          window.history.back();
          closeModal();
        }
      }}
    >
      {children}
    </div>,
    document.getElementById("modal-root")!,
  );
};
