"use client";

import { useEffect } from "react";

export const useModalBackHandler = (
  isOpen: boolean,
  closeModal: () => void,
) => {
  useEffect(() => {
    if (isOpen) {
      // 모달창이 열릴 때 history에 새로운 상태 추가
      window.history.pushState(null, "");
    }

    const handlePopState = () => {
      if (isOpen) {
        closeModal(); // 모달창 닫기
      }
    };

    // popstate 이벤트 리스너 추가
    window.addEventListener("popstate", handlePopState);

    return () => {
      // 컴포넌트가 언마운트되거나 모달창이 닫힐 때 이벤트 리스너 제거
      window.removeEventListener("popstate", handlePopState);
    };
  }, [closeModal, isOpen]);
};
