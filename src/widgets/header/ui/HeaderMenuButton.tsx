"use client";

import { useModal } from "@/shared/lib/hooks";
import { Modal } from "@/shared/ui/modal";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { HeaderMenuModal } from "./HeaderMenuModal";

export const HeaderMenuButton = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button
        className="laptop:hidden"
        aria-label="메뉴 열기"
        onClick={openModal}
      >
        <FaBars className="text-custom-gray" />
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <HeaderMenuModal closeModal={closeModal} />
      </Modal>
    </>
  );
};
