import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../Shared/utils/api";
import { useUser } from "./user-context";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const userId = useUser().user?.id;

  useEffect(() => {
    if (userId) {
      const getData = async () => {
        const res = await fetch(api.getCarts(userId));
        const data = await res.json();
        setCarts(data);
      };

      getData();
    }
  }, []);

  return (
    <CartContext.Provider value={{ carts, setCarts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
