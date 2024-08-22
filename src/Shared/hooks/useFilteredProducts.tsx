import { useState, useEffect } from "react";
import { Category, Product } from "../types";

const useFilteredProducts = (
  products: Product[],
  category: Category,
  maxPrice: number,
  onlyHighRatedProducts: boolean
) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    const filteredProducts = products?.filter((product) => {
      const categoryCondition =
        category !== "all" ? product.category === category : true;

      const maxPriceCondition = maxPrice > product.price;

      const highRatedCondition = onlyHighRatedProducts
        ? product.rating.rate > 4
        : true;

      return categoryCondition && maxPriceCondition && highRatedCondition;
    });
    setFilteredProducts(filteredProducts);
  }, [products, category, maxPrice, onlyHighRatedProducts]);

  return filteredProducts;
};

export default useFilteredProducts;
