import CartSide from './CartSide/CartSide';
import { CartContainer, PrevPage } from './styles';
import CartDetails from './CartDetails/CartDetails';
import { useUserValue } from '../../Shared/context/user-context';
import useFetch from '../../Shared/hooks/useFetch';
import { api } from '../../Shared/utils/api';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const CartPage = () => {
     const [currentCart, setCurrentCart] = useState(0);
     const user = useUserValue()[0];
     let carts = useFetch(api.getCarts());
     if (carts && user) carts = carts.filter((cart) => cart.userId === user.id);

     return (
          <CartContainer>
               <PrevPage to="/home">Previous Page</PrevPage>
               <CartSide carts={carts} setCurrentCart={setCurrentCart} />
               <CartDetails currentCart={currentCart}>
                    <Outlet />
               </CartDetails>
          </CartContainer>
     );
};

export default CartPage;
