import { Link, useLocation } from "react-router-dom";
import { ImageContainer, InfoContainer, ItemPageContainer } from "./styles";
import Navbar from "../../components/Navbar";
import { useCart } from "../../Shared/context/cart-context";
import { useState } from "react";
import Modal from "../../components/Modal";

const ItemPage = () => {
  const [modalMessage, setModalMessage] = useState(null);
  const { addToCart } = useCart();
  const location = useLocation();
  const item = location.state;

  const handleAddToCart = () => {
    addToCart(item.id);
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
