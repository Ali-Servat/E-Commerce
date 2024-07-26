import Navbar from "../../components/Navbar/Navbar";
import CartSide from "./CartSide/CartSide";
import CartDetails from "./CartDetails/CartDetails";
import { CartContainer } from "./styles";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../Shared/context/cart-context";

const CartPage = () => {
  const [currentCartId, setCurrentCartId] = useState(null);
  const { carts, setCarts } = useCart();

  const handleIncrement = (cartId, itemId) => {
    const newCarts = carts.map((c) => {
      if (c.id.toString() === cartId) {
        const newProducts = c.products.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i
        );
        return { ...c, products: newProducts };
      }
      return c;
    });
    setCarts(newCarts);
  };

  const handleDecrement = (cartId, itemId) => {
    const newCarts = carts.map((c) => {
      if (c.id.toString() === cartId) {
        const newProducts = c.products.map((i) =>
          i.id === itemId
            ? { ...i, quantity: i.quantity > 0 ? i.quantity - 1 : i.quantity }
            : i
        );
        return { ...c, products: newProducts };
      }
      return c;
    });
    setCarts(newCarts);
  };

  const handleFetch = (cartId, products) => {
    const newCarts = carts.map((c) =>
      c.id.toString() !== cartId ? c : { ...c, products: products }
    );
    setCarts(newCarts);
  };

  return (
    <>
      <Navbar />
      <CartContainer>
        <CartSide carts={carts} setCurrentCartId={setCurrentCartId} />
        <CartDetails
          carts={carts}
          onFetch={handleFetch}
          currentCartId={currentCartId}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        >
          <Outlet />
        </CartDetails>
      </CartContainer>
    </>
  );
};

export default CartPage;
