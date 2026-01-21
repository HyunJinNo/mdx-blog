import { Breadcrumb } from "@/shared/ui/breadcrumb";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

export const Header = () => {
  return (
    <header className="flex h-12 w-full flex-row items-center justify-between px-4">
      <Breadcrumb />
      <div className="relative w-50">
        <FaSearch className="text-custom-gray/50 absolute top-2 left-3 scale-90" />
        <input
          className="h-8 w-50 rounded-2xl pr-4 pl-9 outline-1 -outline-offset-2 outline-gray-200 focus:outline-gray-400"
          type="search"
          autoComplete="off"
          placeholder="Search..."
        />
      </div>
    </header>
  );
};
