import { FaArchive } from "@react-icons/all-files/fa/FaArchive";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaStream } from "@react-icons/all-files/fa/FaStream";
import { FaTags } from "@react-icons/all-files/fa/FaTags";
import { NavItem } from "./NavItem";

export const BottomNavigation = () => {
  return (
    <aside className="laptop:hidden fixed bottom-0 left-0 z-50 h-14 w-full border-t border-t-gray-200 bg-white drop-shadow-2xl dark:bg-black">
      <nav>
        <ul className="flex h-14 flex-row items-center">
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
    </aside>
  );
};
