import { useSearchValue } from '../../Shared/context/search-context';
import { api } from '../../Shared/utils/api';
import { FieldContainer, FilterbarContainer, SearchBtn } from './styles';

const Filterbar = ({ setItems, setCurrentPagination }) => {
     const { searchParams, setSearchParams } = useSearchValue();

     const handleSearch = async () => {
          const response = await fetch(
               searchParams.category === 'all'
                    ? api.getItems()
                    : api.getItemByCategory(searchParams.category)
          );
          const json = await response.json();

          let categoryItems = json;

          categoryItems = categoryItems.filter(
               (item) => item.price < searchParams.priceRange
          );

          if (searchParams.highRatedOnly) {
               categoryItems = categoryItems.filter(
                    (item) => item.rating.rate > 4
               );
          }
          console.log(categoryItems);

          setItems(categoryItems);
          setCurrentPagination(1);
     };

     return (
          <FilterbarContainer>
               <FieldContainer>
                    <label htmlFor="">
                         Category:
                         <select
                              id="category"
                              value={searchParams.category}
                              onChange={(e) =>
                                   setSearchParams({
                                        ...searchParams,
                                        category: e.target.value,
                                   })
                              }
                         >
                              <option value="all">All</option>
                              <option value="men's clothing">
                                   Men's clothing
                              </option>
                              <option value="women's clothing">
                                   Women's clothing
                              </option>
                              <option value="electronics">Electronics</option>
                              <option value="jewelery">Jewelery</option>
                         </select>
                    </label>
               </FieldContainer>
               <FieldContainer>
                    <label htmlFor="">price range:</label>
                    <input
                         type="range"
                         id="price-range"
                         min="0"
                         max="1000"
                         step="20"
                         value={searchParams.priceRange}
                         onChange={(e) =>
                              setSearchParams({
                                   ...searchParams,
                                   priceRange: e.target.value,
                              })
                         }
                    />
                    <span style={{ width: '45.75px' }}>
                         {searchParams.priceRange}$
                    </span>
               </FieldContainer>
               <FieldContainer>
                    <input
                         type="checkbox"
                         id="high-rate"
                         checked={searchParams.highRatedOnly}
                         onChange={(e) =>
                              setSearchParams({
                                   ...searchParams,
                                   highRatedOnly: !searchParams.highRatedOnly,
                              })
                         }
                    />
                    <label htmlFor="high-rate">only high rated items</label>
               </FieldContainer>
               <FieldContainer>
                    <SearchBtn onClick={handleSearch}>Search</SearchBtn>
               </FieldContainer>
          </FilterbarContainer>
     );
};

export default Filterbar;
