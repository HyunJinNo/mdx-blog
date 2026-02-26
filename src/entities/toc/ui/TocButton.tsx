"use client";

import { useModal } from "@/shared/lib/hooks";
import { Modal } from "@/shared/ui/modal";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import { TocModal } from "./TocModal";

interface TocButtonProps {
  postTitle: string;
}

export const TocButton = ({ postTitle }: TocButtonProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button
        className="desktop:hidden group mt-12 mb-8 flex w-fit flex-row items-center gap-2 rounded-lg border border-gray-200 px-4 py-1 duration-300 hover:border-blue-500 hover:bg-blue-500"
        onClick={openModal}
      >
        <span className="text-custom-gray group-hover:text-white">
          Contents
        </span>
        <FaChevronRight className="text-sm text-gray-400 group-hover:text-white" />
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <TocModal postTitle={postTitle} closeModal={closeModal} />
      </Modal>
    </>
  );
};
