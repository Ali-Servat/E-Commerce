import { useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";
import Filterbar from "../Filterbar/Filterbar";
import ItemsList from "./ItemsList/ItemsList";
import { MainContainer } from "./styles";
import useFilteredProducts from "../../../Shared/hooks/useFilteredProducts";
import { Category } from "../../../Shared/types";
import useProducts from "../../../Shared/hooks/useProducts";

const Main = () => {
  const [currentPagination, setCurrentPagination] = useState<number>(1);
  const [category, setCategory] = useState<Category>("all");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [onlyHighRatedProducts, setOnlyHighRatedProducts] = useState(false);

  const products = useProducts();
  const filteredProducts = useFilteredProducts(
    products,
    category,
    maxPrice,
    onlyHighRatedProducts
  );

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
        items={filteredProducts}
        currentPagination={currentPagination}
        pageSize={pageSize}
      />
      <Pagination
        currentPagination={currentPagination}
        setCurrentPagination={setCurrentPagination}
        pageSize={pageSize}
        allItemsCount={filteredProducts ? filteredProducts.length : 0}
      />
    </MainContainer>
  );
};

export default Main;
