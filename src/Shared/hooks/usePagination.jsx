import { useMemo } from 'react';

const usePagination = (totalCount, pageSize, siblingCount = 1, currentPage) => {
     const paginationRange = useMemo(() => {
          const totalPageCount = Math.ceil(totalCount / pageSize);
          const totalPageNumbers = siblingCount + 5;
          const DOTS = '...';

          if (totalPageCount <= totalPageNumbers) {
               return range(1, totalPageCount);
          }

          const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
          const rightSiblingIndex = Math.min(
               currentPage + siblingCount,
               totalPageCount
          );

          const shouldShowLeftDots = leftSiblingIndex > 2;
          const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

          const firstPageIndex = 1;
          const lastPageIndex = totalPageCount;

          if (!shouldShowLeftDots && shouldShowRightDots) {
               let leftItemsCount = 3 + 2 * siblingCount;
               let leftRange = range(1, leftItemsCount);

               return [...leftRange, DOTS, lastPageIndex];
          }

          if (shouldShowLeftDots && !shouldShowRightDots) {
               let rightItemsCount = 3 + 2 * siblingCount;
               let rightRange = range(
                    totalPageCount - rightItemsCount + 1,
                    totalPageCount
               );

               return [firstPageIndex, DOTS, ...rightRange];
          }

          if (shouldShowLeftDots && shouldShowRightDots) {
               let middleRange = range(leftSiblingIndex, rightSiblingIndex);
               return [
                    firstPageIndex,
                    DOTS,
                    ...middleRange,
                    DOTS,
                    lastPageIndex,
               ];
          }
     }, [totalCount, pageSize, siblingCount, currentPage]);

     return paginationRange;
};

const range = (start = 0, end = 0) => {
     const length = end - start + 1;
     return Array.from({ length }, (_, index) => index + start);
};

export default usePagination;
