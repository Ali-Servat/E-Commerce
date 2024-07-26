import { CartSideContainer, StyledLink } from "./styles";

const CartSide = ({ carts, setCurrentCartId }) => {
  return (
    <CartSideContainer>
      <h3>Your Carts</h3>
      <ul>
        {carts &&
          carts.map((cart) => {
            return (
              <li key={cart.id}>
                <StyledLink
                  to={"/cart/" + cart.id}
                  onClick={() => setCurrentCartId(cart.id)}
                >
                  cart #{cart.id}
                </StyledLink>
              </li>
            );
          })}
      </ul>
    </CartSideContainer>
  );
};

export default CartSide;
