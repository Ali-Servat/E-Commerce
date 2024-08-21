import { useState, useEffect } from "react";
import { getProducts } from "../../api/products";
import { Category, Product } from "../types";

const useProducts = (
  category: Category,
  maxPrice: number,
  onlyHighRatedProducts: boolean
) => {
  const [products, setProducts] = useState<Product[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProducts();

      const filteredProducts = response?.filter((product) => {
        const categoryCondition =
          category !== "all" ? product.category === category : true;

        const maxPriceCondition = maxPrice > product.price;

        const highRatedCondition = onlyHighRatedProducts
          ? product.rating.rate > 4
          : true;

        return categoryCondition && maxPriceCondition && highRatedCondition;
      });

      setProducts(filteredProducts);
    };

    fetchData();
  }, [category, maxPrice, onlyHighRatedProducts]);

  return products;
};

export default useProducts;
