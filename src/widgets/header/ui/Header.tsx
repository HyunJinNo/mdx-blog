import { SearchInput } from "@/features/searchPostListByTitle";
import { Breadcrumb } from "@/shared/ui/breadcrumb";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

export const Header = () => {
  return (
    <header className="flex h-12 w-full flex-row items-center justify-between px-6">
      <Breadcrumb />
      <div className="relative w-50">
        <FaSearch className="text-custom-gray/50 absolute top-2 left-3 scale-90" />
        <SearchInput />
      </div>
    </header>
  );
};
