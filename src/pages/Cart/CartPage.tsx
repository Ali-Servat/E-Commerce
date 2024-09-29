import Navbar from "../../components/Navbar";
import { CartContainer } from "./styles";
import { useCart } from "../../Shared/context/cart-context";
import { getProductById } from "../../api/products";
import { useEffect, useState } from "react";
import { Product } from "../../Shared/types";

const CartPage = () => {
  const { cart } = useCart();
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchProducts = () => {
      if (!cart) return;
      const promises = cart.products.map((item) => getProductById(item.itemId));
      Promise.all(promises).then((products) => setProducts(products));
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <CartContainer>{JSON.stringify(products)}</CartContainer>
    </>
  );
};

export default CartPage;
