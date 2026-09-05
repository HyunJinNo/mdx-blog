import { FaArchive } from "@react-icons/all-files/fa/FaArchive";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaStream } from "@react-icons/all-files/fa/FaStream";
import { FaTags } from "@react-icons/all-files/fa/FaTags";
import { BottomNavItem } from "./BottomNavItem";

export const BottomNavigation = () => {
  return (
    <>
      <div className="laptop:hidden h-14" />
      <aside className="laptop:hidden fixed bottom-0 left-0 z-50 h-14 w-full border-t border-t-gray-200 bg-white drop-shadow-2xl dark:bg-black">
        <nav>
          <ul className="flex h-14 flex-row items-center">
            <BottomNavItem title="HOME" href="/">
              <FaHome />
            </BottomNavItem>
            <BottomNavItem title="CATEGORIES" href="/categories">
              <FaStream />
            </BottomNavItem>
            <BottomNavItem title="TAGS" href="/tags">
              <FaTags />
            </BottomNavItem>
            <BottomNavItem title="ARCHIVES" href="/archives">
              <FaArchive />
            </BottomNavItem>
          </ul>
        </nav>
      </aside>
    </>
  );
};
