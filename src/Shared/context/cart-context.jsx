import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../Shared/utils/api";
import { useUser } from "./user-context";
import Proptypes from "prop-types";

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
  }, [userId]);

  return (
    <CartContext.Provider value={{ carts, setCarts }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: Proptypes.element,
};

export const useCart = () => useContext(CartContext);
