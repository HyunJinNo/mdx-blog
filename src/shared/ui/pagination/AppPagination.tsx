import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";

interface AppPaginationProps {
  /**
   * 현재 페이지 번호
   */
  currentPage: number;

  /**
   * 전체 페이지 수
   */
  totalPages: number;

  /**
   * 첫 페이지 여부
   */
  first: boolean;

  /**
   * 마지막 페이지 여부
   */
  last: boolean;
}

export const AppPagination = ({
  currentPage,
  totalPages,
  first,
  last,
}: AppPaginationProps) => {
  return (
    <Pagination className="py-12">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-label="이전 페이지"
            href={currentPage === 2 ? "/" : `/page${currentPage - 1}`}
            disabled={first}
          />
        </PaginationItem>

        {currentPage <= 3 ? (
          Array.from({ length: currentPage - 1 }, (_, index) => index + 1).map(
            (page) => (
              <PaginationItem key={page}>
                <PaginationLink href={page === 1 ? "/" : `/page${page}`}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            ),
          )
        ) : (
          <>
            <PaginationItem>
              <PaginationLink href="/">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`/page${currentPage - 1}`}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationLink href={`/page${currentPage}`} isActive={true}>
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {currentPage + 2 >= totalPages ? (
          Array.from(
            { length: totalPages - currentPage },
            (_, index) => index + currentPage + 1,
          ).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink href={`/page${page}`}>{page}</PaginationLink>
            </PaginationItem>
          ))
        ) : (
          <>
            <PaginationItem>
              <PaginationLink href={`/page${currentPage + 1}`}>
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`/page${totalPages}`}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            aria-label="다음 페이지"
            href={`/page${currentPage + 1}`}
            disabled={last}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
