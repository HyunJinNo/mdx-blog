"use client";

import { ModalTemplate } from "@/shared/ui/modal";
import { useTableOfContents } from "../model/useTableOfContents";
import { TocList } from "./TocList";

interface TocModalProps {
  postTitle: string;
  closeModal: () => void;
}

export const TocModal = ({ postTitle, closeModal }: TocModalProps) => {
  const { activeId, headingList } = useTableOfContents();

  return (
    <ModalTemplate title={postTitle} closeModal={closeModal}>
      <nav className="text-custom-gray overflow-auto py-4 text-sm">
        <ul className="flex flex-col gap-2.5">
          {headingList.map((heading) => (
            <TocList key={heading.id} activeId={activeId} tocNode={heading} />
          ))}
        </ul>
      </nav>
    </ModalTemplate>
  );
};
