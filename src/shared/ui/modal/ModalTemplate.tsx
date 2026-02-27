"use client";

import { ReactNode } from "react";
import { MdClose } from "@react-icons/all-files/md/MdClose";

interface ModalTemplateProps {
  title: string;
  className?: string;
  children?: ReactNode;
  closeModal: () => void;
}

export const ModalTemplate = ({
  title,
  className,
  children,
  closeModal,
}: ModalTemplateProps) => {
  return (
    <section
      className={[
        "relative flex max-h-[calc(100vh-1rem)] w-96 max-w-[calc(100vw-1rem)] flex-col rounded-xl bg-white dark:border dark:border-white dark:bg-black",
        className,
      ].join(" ")}
    >
      <div className="flex w-full flex-row items-center justify-between gap-1 border-b border-gray-200 px-4 py-2">
        <div className="truncate">{title}</div>
        <MdClose
          className="text-custom-gray hover:text-custom-blue cursor-pointer"
          size="1.5rem"
          onClick={closeModal}
        />
      </div>
      {children}
    </section>
  );
};
