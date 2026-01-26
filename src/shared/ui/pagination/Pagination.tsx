import Link from "next/link";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="flex h-7 items-center justify-center text-[#555555]">
      <ul className="flex flex-row items-center gap-3">
        <li>
          {currentPage === 1 ? (
            <div className="flex h-7 w-7 cursor-not-allowed items-center justify-center">
              <FaChevronLeft className="text-gray-200" />
            </div>
          ) : (
            <Link
              className="flex h-7 items-center justify-center rounded-lg px-1.5 outline-gray-200 duration-150 hover:outline"
              href={currentPage === 2 ? "/" : `page${currentPage - 1}`}
            >
              <FaChevronLeft />
            </Link>
          )}
        </li>

        <li>
          <Link
            className="flex h-7 items-center justify-center rounded-lg bg-gray-100 px-2"
            href={`/page${currentPage}`}
          >
            {currentPage}
          </Link>
        </li>

        {/* {pages.map((page) => (
          <li key={page}>
            <Link
              className={[
                page === currentPage
                  ? "bg-gray-100"
                  : "outline-gray-200 duration-150 hover:outline",
                "flex h-7 items-center justify-center rounded-lg px-2",
              ].join(" ")}
              href={page === 1 ? "/" : `/page${page}`}
            >
              {page}
            </Link>
          </li>
        ))} */}

        <li>
          {currentPage === totalPages ? (
            <div className="flex h-7 w-7 cursor-not-allowed items-center justify-center">
              <FaChevronRight className="text-gray-200" />
            </div>
          ) : (
            <Link
              className="flex h-7 items-center justify-center rounded-lg px-1.5 outline-gray-200 duration-150 hover:outline"
              href={`/page${currentPage + 1}`}
            >
              <FaChevronRight />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
