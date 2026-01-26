import Link from "next/link";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  return (
    <nav className="flex h-7 items-center justify-center text-[#555555]">
      <ul className="flex flex-row items-center gap-3">
        {/* 이전 페이지 */}
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

        {/* 처음 페이지 번호 ~ 현재 페이지 번호 - 1 */}
        {currentPage <= 3 ? (
          Array.from({ length: currentPage - 1 }, (_, index) => index + 1).map(
            (page) => (
              <li key={page}>
                <Link
                  className="flex h-7 items-center justify-center rounded-lg px-1.5 outline-gray-200 duration-150 hover:outline"
                  href={page === 1 ? "/" : `/page${page}`}
                >
                  {page}
                </Link>
              </li>
            ),
          )
        ) : (
          <>
            <li>
              <Link
                className="flex h-7 items-center justify-center rounded-lg px-1.5 outline-gray-200 duration-150 hover:outline"
                href="/"
              >
                1
              </Link>
            </li>
            <li>
              <span className="text-custom-gray/50 cursor-not-allowed">
                ...
              </span>
            </li>
            <li>
              <Link
                className="flex h-7 items-center justify-center rounded-lg px-1.5 outline-gray-200 duration-150 hover:outline"
                href={`page${currentPage - 1}`}
              >
                {currentPage - 1}
              </Link>
            </li>
          </>
        )}

        {/* 현재 페이지 번호 */}
        <li>
          <Link
            className="flex h-7 items-center justify-center rounded-lg bg-gray-100 px-2"
            href={`/page${currentPage}`}
          >
            {currentPage}
          </Link>
        </li>

        {/* 현재 페이지 번호 + 1 ~ 마지막 페이지 번호 */}
        {currentPage + 2 >= totalPages ? (
          Array.from(
            { length: totalPages - currentPage },
            (_, index) => index + currentPage + 1,
          ).map((page) => (
            <li key={page}>
              <Link
                className="flex h-7 items-center justify-center rounded-lg px-1.5 outline-gray-200 duration-150 hover:outline"
                href={`/page${page}`}
              >
                {page}
              </Link>
            </li>
          ))
        ) : (
          <>
            <li>
              <Link
                className="flex h-7 items-center justify-center rounded-lg px-1.5 outline-gray-200 duration-150 hover:outline"
                href={`/page${currentPage + 1}`}
              >
                {currentPage + 1}
              </Link>
            </li>
            <li>
              <span className="text-custom-gray/50 cursor-not-allowed">
                ...
              </span>
            </li>
            <li>
              <Link
                className="flex h-7 items-center justify-center rounded-lg px-1.5 outline-gray-200 duration-150 hover:outline"
                href={`page${totalPages}`}
              >
                {totalPages}
              </Link>
            </li>
          </>
        )}

        {/* 다음 페이지 */}
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
