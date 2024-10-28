import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationControls = ({
  currentPage,
  totalPages,
  type = "",
  limit = 10,
  siblingCount = 1,
  className = "",
}: {
  currentPage: number;
  totalPages: number;
  type: string;
  limit: number;
  siblingCount: number;
  className: string;
}) => {
  // Generate page numbers to show
  const generatePagination = () => {
    const pages = [];
    const totalNumbers = siblingCount + 5; // siblings + first + last + current + 2 ellipsis

    // If total pages is less than total numbers we want to show
    if (totalPages <= totalNumbers) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Calculate start and end of sibling range
      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(
        currentPage + siblingCount,
        totalPages
      );

      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

      if (!shouldShowLeftDots && shouldShowRightDots) {
        // Show more pages at start
        for (let i = 1; i <= 3 + siblingCount * 2; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (shouldShowLeftDots && !shouldShowRightDots) {
        // Show more pages at end
        pages.push(1);
        pages.push("...");
        for (
          let i = totalPages - (3 + siblingCount * 2);
          i <= totalPages;
          i++
        ) {
          pages.push(i);
        }
      } else if (shouldShowLeftDots && shouldShowRightDots) {
        // Show dots on both ends
        pages.push(1);
        pages.push("...");
        for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const pages = generatePagination();

  return (
    <Pagination className={className}>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`/jobs?type=${type}&page=${currentPage - 1}&limit=${limit}`}
              aria-label="Go to previous page"
            />
          </PaginationItem>
        )}

        {pages.map((page, index) => (
          <PaginationItem key={index}>
            {page === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href={`/jobs?type=${type}&page=${page}&limit=${limit}`}
                isActive={page === currentPage}
                aria-label={`Go to page ${page}`}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href={`/jobs?type=${type}&page=${currentPage + 1}&limit=${limit}`}
              aria-label="Go to next page"
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationControls;
