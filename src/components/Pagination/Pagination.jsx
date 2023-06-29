import {
     PaginationButton,
     PaginationCTAContainer,
     PaginationContainer,
} from './styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import colors from '../../Shared/utils/UtilStyles';
import usePagination from '../../Shared/hooks/usePagination';

const Pagination = ({
     currentPagination,
     setCurrentPagination,
     pageSize,
     allItemsCount,
}) => {
     const numbers = usePagination(
          allItemsCount,
          pageSize,
          2,
          currentPagination
     );

     const lastPageIndex = Math.ceil(allItemsCount / pageSize);

     const handlePaginationChange = (number) => {
          if (number !== '...') setCurrentPagination(number);
     };

     const nextPagination = () => {
          if (currentPagination < lastPageIndex)
               setCurrentPagination((prev) => ++prev);
     };

     const prevPagination = () => {
          if (currentPagination > 1) setCurrentPagination((prev) => --prev);
     };

     return (
          <PaginationContainer>
               <PaginationCTAContainer>
                    <FaChevronLeft
                         color={colors.teal}
                         onClick={() => prevPagination()}
                    />
               </PaginationCTAContainer>
               <div>
                    {numbers
                         ? numbers.map((number, index) => {
                                return (
                                     <PaginationButton
                                          key={index}
                                          type={
                                               number === '...'
                                                    ? 'dots'
                                                    : 'number'
                                          }
                                          active={
                                               number === currentPagination
                                                    ? 'true'
                                                    : 'false'
                                          }
                                          onClick={() =>
                                               handlePaginationChange(number)
                                          }
                                     >
                                          {number}
                                     </PaginationButton>
                                );
                           })
                         : ''}
               </div>
               <PaginationCTAContainer>
                    <FaChevronRight
                         color={colors.teal}
                         onClick={() => nextPagination()}
                    />
               </PaginationCTAContainer>
          </PaginationContainer>
     );
};

export default Pagination;
