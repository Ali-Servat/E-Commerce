import { useParams } from 'react-router-dom';
import { Button, CartDetailsContainer, Item, List } from './styles';
import { api } from '../../../Shared/utils/api';
import { useEffect, useState } from 'react';

const CartDetails = ({ currentCart }) => {
     const { cartId } = useParams();
     const [items, setItems] = useState([]);

     useEffect(() => {
          const promises =
               currentCart &&
               currentCart.products.map(async (product) => {
                    const response = await fetch(
                         api.getItem(product.productId)
                    );
                    const json = await response.json();
                    return json;
               });

          if (promises)
               Promise.all(promises).then((itemsArray) => {
                    itemsArray.forEach((item) => {
                         currentCart.products.forEach((product) => {
                              if (product.productId === item.id)
                                   item.quantity = product.quantity;
                         });
                    });
                    setItems(itemsArray);
               });
     }, [currentCart]);

     return (
          <CartDetailsContainer>
               {cartId && (
                    <>
                         <h3>Cart {cartId}</h3>
                         <h3>Items in the cart:</h3>
                         <List>
                              {items &&
                                   items.map((item) => (
                                        <Item key={item.id}>
                                             <img src={item.image} />
                                             <div>
                                                  <h4>{item.title}</h4>
                                                  <p>
                                                       quantity: {item.quantity}
                                                  </p>
                                                  <p>
                                                       total price:{' '}
                                                       {item.price *
                                                            item.quantity}
                                                       $
                                                  </p>
                                                  <Button>-</Button>
                                                  <Button>+</Button>
                                             </div>
                                        </Item>
                                   ))}
                         </List>
                         <p>
                              total:{' '}
                              {items.reduce((prev, current) => {
                                   return (
                                        prev + current.quantity * current.price
                                   );
                              }, 0)}
                              $
                         </p>
                         <Button>pay</Button>
                    </>
               )}
          </CartDetailsContainer>
     );
};

export default CartDetails;
