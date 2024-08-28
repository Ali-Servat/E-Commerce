import { useEffect, useState } from "react";
import { getProducts, getProductsBack } from "../../api/products";
import { Product } from "../types";

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data as Product[]);
    };

    fetchData();
  }, []);

  return products;
};

export default useProducts;
