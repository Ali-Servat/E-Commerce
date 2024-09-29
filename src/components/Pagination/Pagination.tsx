import {
  PaginationButton,
  PaginationCTAContainer,
  PaginationContainer,
} from "./styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import usePagination from "../../Shared/hooks/usePagination";
import { useTheme } from "styled-components";

type PropType = {
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  pageSize: number;
  allItemsCount: number;
};

const Pagination = ({
  currentPage,
  onPageChange,
  pageSize,
  allItemsCount,
}: PropType) => {
  const theme = useTheme();
  const numbers = usePagination(allItemsCount, pageSize, 2, currentPage);

  return (
    <PaginationContainer>
      <PaginationCTAContainer>
        <FaChevronLeft
          color={theme?.colors.primary}
          onClick={() => onPageChange(currentPage - 1)}
        />
      </PaginationCTAContainer>
      <div>
        {numbers
          ? numbers.map((number, index) => {
              return (
                <PaginationButton
                  key={index}
                  $isDots={number === "..." ? true : false}
                  $isActive={number === currentPage ? true : false}
                  onClick={() => {
                    typeof number === "number"
                      ? onPageChange(Number(number))
                      : null;
                  }}
                >
                  {number}
                </PaginationButton>
              );
            })
          : ""}
      </div>
      <PaginationCTAContainer>
        <FaChevronRight
          color={theme?.colors.primary}
          onClick={() => onPageChange(currentPage + 1)}
        />
      </PaginationCTAContainer>
    </PaginationContainer>
  );
};

export default Pagination;
