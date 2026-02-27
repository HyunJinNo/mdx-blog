import { ToggleThemeButton } from "@/features/toggleTheme";
import { EmailLink, SidebarLink } from "@/shared/ui/link";
import { ModalTemplate } from "@/shared/ui/modal";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FiFigma } from "@react-icons/all-files/fi/FiFigma";

interface HeaderMenuModalProps {
  closeModal: () => void;
}

export const HeaderMenuModal = ({ closeModal }: HeaderMenuModalProps) => {
  return (
    <ModalTemplate title="Menu" closeModal={closeModal}>
      <div className="flex flex-row items-center justify-center gap-2 rounded-b-xl bg-teal-500 py-4 dark:bg-black">
        <ToggleThemeButton />
        <EmailLink />
        <SidebarLink href="https://github.com/HyunJinNo">
          <FaGithub />
        </SidebarLink>
        <SidebarLink href="https://hyunjinno.notion.site/3d1e9d32612740b8a5b7be16f5156d94">
          <FaUser />
        </SidebarLink>
        <SidebarLink href="https://www.figma.com/design/holMZu0fmxxQQOLJy3d0Wg/HyunJinNo's-R%C3%A9sum%C3%A9?node-id=0-1&p=f&t=WK5OJVTZA62yFb9Y-0">
          <FiFigma />
        </SidebarLink>
        <SidebarLink href="https://www.figma.com/slides/crcjf68QabCbR1LQC18bE1/HyunJinNo's-Portfolio?node-id=1-303&t=EH7GJPvEhjEdV8IJ-0">
          <FiFigma />
        </SidebarLink>
      </div>
    </ModalTemplate>
  );
};
