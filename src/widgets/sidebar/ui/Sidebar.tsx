import Image from "next/image";
import Link from "next/link";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaStream } from "@react-icons/all-files/fa/FaStream";
import { FaTags } from "@react-icons/all-files/fa/FaTags";
import { FaArchive } from "@react-icons/all-files/fa/FaArchive";
import { NavItem } from "@/shared/ui/navItem";
import { EmailLink, SidebarLink } from "@/shared/ui/link";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FiFigma } from "@react-icons/all-files/fi/FiFigma";
import { ToggleThemeButton } from "@/features/toggleTheme";

export const Sidebar = () => {
  return (
    <aside className="relative flex h-screen w-65 flex-col">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="absolute -z-10 h-full object-cover"
        src="/images/background.avif"
        alt="background"
      />
      <div className="flex h-full flex-col justify-between pt-14 pb-6">
        <div className="flex flex-col gap-10">
          <header className="flex flex-col pl-10">
            <Link
              className="h-32 w-32 pl-2 duration-500 hover:scale-120"
              href="/"
            >
              <Image
                src="/logos/falling-star-logo.webp"
                alt="avatar"
                width={112}
                height={112}
              />
            </Link>
            <Link
              className="mt-2 bg-linear-to-r from-[#dddddd] to-white bg-clip-text text-[1.75rem] font-black text-transparent duration-300 ease-in-out hover:text-white"
              href="/"
            >
              {"노현진's Blog"}
            </Link>
            <p className="mt-1 text-[15.2px] font-light tracking-wide text-[#eeeeee]">
              A Passionate Developer
            </p>
          </header>
          <nav className="px-6 text-white/80">
            <ul className="flex flex-col gap-1">
              <NavItem title="HOME" href="/">
                <FaHome />
              </NavItem>
              <NavItem title="CATEGORIES" href="/categories">
                <FaStream />
              </NavItem>
              <NavItem title="TAGS" href="/tags">
                <FaTags />
              </NavItem>
              <NavItem title="ARCHIVES" href="/archives">
                <FaArchive />
              </NavItem>
            </ul>
          </nav>
        </div>
        <div className="flex flex-wrap gap-2 px-6">
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
      </div>
    </aside>
  );
};
