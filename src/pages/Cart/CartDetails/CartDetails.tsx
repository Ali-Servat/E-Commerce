import { Link } from "react-router-dom";
import { Button, CartDetailsContainer, Item, List } from "./styles";
import { Product } from "../../../Shared/types";

const CartDetails = ({ products }: { products: Product[] }) => {
  // const handleIncrement = (itemId) => {
  //   onIncrement(cartId, itemId);
  // };

  // const handleDecrement = (itemId) => {
  //   onDecrement(cartId, itemId);
  // };

  return (
    <CartDetailsContainer>
      <>
        {/* <h3>Cart {cartId}</h3> */}
        <h3>Items in the cart:</h3>
        <List>
          {products &&
            products.map((item) => (
              <Item key={item.productId || item.id}>
                <img src={item.image} />
                <div>
                  <h4>{item.title}</h4>
                  <p>quantity: {item.quantity}</p>
                  <p>total price: {(item.price * item.quantity).toFixed(2)}$</p>
                  <Button onClick={() => handleDecrement(item.id)}>-</Button>
                  <Button onClick={() => handleIncrement(item.id)}>+</Button>
                </div>
              </Item>
            ))}
        </List>
        <p>
          total:{" "}
          {currentCart?.products
            ?.reduce((prev, current) => {
              return prev + current.quantity * current.price;
            }, 0)
            .toFixed(2)}
          $
        </p>
        <Link to="/home">return</Link>
        <Button>pay</Button>
      </>
    </CartDetailsContainer>
  );
};

export default CartDetails;
