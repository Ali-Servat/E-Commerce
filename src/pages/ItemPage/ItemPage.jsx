import { Link, useParams } from "react-router-dom";
import { api } from "../../Shared/utils/api";
import useFetch from "../../Shared/hooks/useFetch";
import { ImageContainer, InfoContainer, ItemPageContainer } from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import { useUser } from "../../Shared/context/user-context";
import { useCart } from "../../Shared/context/cart-context";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const ItemPage = () => {
  const [modalMessage, setModalMessage] = useState(null);
  let { itemId } = useParams();
  const item = useFetch(api.getItem(itemId));
  const { carts, setCarts } = useCart();
  const userId = useUser()?.user?.id;
  const cartId = carts[0]?.id;

  const handleAddToCart = async () => {
    if (!userId) {
      setModalMessage("Please login to add this item to your cart.");
    } else {
      const fetchOptions = {
        method: "PATCH",
        body: JSON.stringify({
          userId: userId,
          date: Date.now().toLocaleString(),
          products: [{ productId: itemId, quantity: 1 }],
        }),
      };
      const res = await fetch(api.updateCart(cartId), fetchOptions);

      if (res) {
        try {
          await updateCarts();
          setModalMessage("Item was successfully added to your cart!");
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  const updateCarts = async () => {
    const newCarts = carts.map((cart) =>
      cart.id !== cartId
        ? cart
        : {
            ...cart,
            products:
              cart.products.find((p) => p.id === item.id) === undefined
                ? [...cart.products, { ...item, quantity: 1 }]
                : cart.products,
          }
    );
    setCarts(newCarts);
  };

  return (
    <>
      <Navbar />
      {item && (
        <>
          <ItemPageContainer>
            <div>
              <ImageContainer src={item.image} alt="" />
            </div>
            <InfoContainer>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div>
                <span>price: {item.price}$</span>
                <span>rating: {item.rating.rate}</span>
                <Link to="/home">return</Link>
                <button onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </InfoContainer>
          </ItemPageContainer>
        </>
      )}
      <Modal
        isOpen={modalMessage !== null}
        title="Login"
        onClose={() => {
          setModalMessage(null);
        }}
      >
        {modalMessage}
      </Modal>
    </>
  );
};

export default ItemPage;
