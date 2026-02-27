"use client";

import { useModal } from "@/shared/lib/hooks";
import { Modal } from "@/shared/ui/modal";
import { FaList } from "@react-icons/all-files/fa/FaList";
import { TocModal } from "./TocModal";
import { useEffect, useRef } from "react";

interface TocTopBarProps {
  postTitle: string;
}

export const TocTopBar = ({ postTitle }: TocTopBarProps) => {
  const topBarRef = useRef<HTMLDivElement>(null);
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            topBarRef.current?.classList.remove("invisible");
          } else {
            topBarRef.current?.classList.add("invisible");
          }
        });
      },
      { rootMargin: "0px 0px -99% 0px" },
    );

    if (topBarRef.current) {
      observer.observe(topBarRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className="laptop:invisible invisible sticky top-0 z-50 flex h-12 flex-row items-center justify-between gap-1 border-b border-gray-200 bg-white px-4 dark:bg-black"
        ref={topBarRef}
      >
        <div className="truncate font-medium">{postTitle}</div>
        <FaList
          className="text-custom-gray hover:text-custom-blue cursor-pointer"
          onClick={openModal}
        />
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <TocModal postTitle={postTitle} closeModal={closeModal} />
      </Modal>
    </>
  );
};
