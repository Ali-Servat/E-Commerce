import { useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";
import Filterbar from "../Filterbar/Filterbar";
import ItemsList from "./ItemsList/ItemsList";
import { MainContainer } from "./styles";
import { SearchContextProvider } from "../../../Shared/context/search-context";
import useProducts from "../../../Shared/hooks/useProducts";
import { Category } from "../../../Shared/types";

const Main = () => {
  const [currentPagination, setCurrentPagination] = useState<number>(1);
  const [category, setCategory] = useState<Category>("all");
  const [maxPrice, setMaxPrice] = useState<number>(200);
  const [onlyHighRatedProducts, setOnlyHighRatedProducts] =
    useState<boolean>(false);
  const products = useProducts(category, maxPrice, onlyHighRatedProducts);
  const pageSize = 8;

  const handleCategoryChange = (category: Category) => {
    setCategory(category);
  };

  const toggleHighRatedOnly = () => {
    setOnlyHighRatedProducts(!onlyHighRatedProducts);
  };

  const handleMaxPriceChange = (maxPrice: number) => {
    setMaxPrice(maxPrice);
  };

  return (
    <SearchContextProvider>
      <MainContainer>
        <Filterbar
          category={category}
          maxPrice={maxPrice}
          onlyHighRatedProducts={onlyHighRatedProducts}
          onCategoryChange={handleCategoryChange}
          onHighRatedOnlyToggle={toggleHighRatedOnly}
          onMaxPriceChange={handleMaxPriceChange}
        />
        <ItemsList
          items={products}
          currentPagination={currentPagination}
          pageSize={pageSize}
        />
        <Pagination
          currentPagination={currentPagination}
          setCurrentPagination={setCurrentPagination}
          pageSize={pageSize}
          allItemsCount={products ? products.length : 0}
        />
      </MainContainer>
    </SearchContextProvider>
  );
};

export default Main;
