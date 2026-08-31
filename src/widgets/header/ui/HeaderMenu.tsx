import { ToggleThemeButton } from "@/features/toggleTheme";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { EmailLink, SidebarLink } from "@/shared/ui/link";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FiFigma } from "@react-icons/all-files/fi/FiFigma";
import { Menu } from "lucide-react";

export const HeaderMenu = () => {
  return (
    <Dialog>
      <DialogTrigger className="laptop:hidden" aria-label="메뉴 열기">
        <Menu className="h-4 w-4" />
      </DialogTrigger>
      <DialogContent className="w-80">
        <DialogHeader>
          <DialogTitle>Menu</DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex flex-row items-center justify-center gap-2 bg-teal-500 duration-100 dark:bg-transparent">
          <ToggleThemeButton />
          <EmailLink />
          <SidebarLink
            href="https://github.com/HyunJinNo"
            ariaLabel="HyunJinNo's GitHub"
          >
            <FaGithub />
          </SidebarLink>
          <SidebarLink
            href="https://hyunjinno.notion.site/3d1e9d32612740b8a5b7be16f5156d94"
            ariaLabel="HyunJinNo's Notion"
          >
            <FaUser />
          </SidebarLink>
          <SidebarLink
            href="https://www.figma.com/design/holMZu0fmxxQQOLJy3d0Wg/HyunJinNo's-R%C3%A9sum%C3%A9?node-id=0-1&p=f&t=WK5OJVTZA62yFb9Y-0"
            ariaLabel="HyunJinNo's Résumé"
          >
            <FiFigma />
          </SidebarLink>
          <SidebarLink
            href="https://www.figma.com/slides/crcjf68QabCbR1LQC18bE1/HyunJinNo's-Portfolio?node-id=1-303&t=EH7GJPvEhjEdV8IJ-0"
            ariaLabel="HyunJinNo's Portfolio"
          >
            <FiFigma />
          </SidebarLink>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
