import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
     const [searchParams, setSearchParams] = useState({
          category: 'all',
          priceRange: 1000,
          highRatedOnly: false,
     });

     return (
          <SearchContext.Provider value={{ searchParams, setSearchParams }}>
               {children}
          </SearchContext.Provider>
     );
};

export const useSearchValue = () => useContext(SearchContext);
