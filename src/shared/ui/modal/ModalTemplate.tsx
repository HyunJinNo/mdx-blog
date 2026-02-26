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
        "relative flex max-h-[calc(100vh-1rem)] w-96 flex-col rounded-xl bg-white",
        className,
      ].join(" ")}
    >
      <div className="flex w-full flex-row items-center justify-between border-b border-gray-200 px-4 py-2">
        <div>{title}</div>
        <MdClose
          className="text-custom-gray hover:text-custom-blue cursor-pointer"
          size="1.5rem"
          onClick={() => {
            window.history.back();
            closeModal();
          }}
        />
      </div>
      {children}
    </section>
  );
};
