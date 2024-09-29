import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useUser } from "./user-context";
import { Cart } from "../types";
import { addProductToCart, getUserCart } from "../../api/carts";

type CartContextType = {
  cart: Cart | null;
  addToCart: (productId: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const userId = useUser().user?.id;

  useEffect(() => {
    if (userId) {
      const getData = async () => {
        const cart = await getUserCart(userId);
        console.log(cart);
        setCart(cart);
      };

      getData();
    }
  }, [userId]);

  const addToCart = async (productId: string) => {
    if (!cart) return;
    const response = await addProductToCart(cart.id, productId);
    setCart(response);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);

  if (cart === null) {
    throw new Error("Must use inside provider");
  }

  return cart;
};
