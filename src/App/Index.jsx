import Router from "./Router";
import BaseStyles from "./BaseStyles";
import { ModalProvider } from "../Shared/context/modal-context";
import { UserProvider } from "../Shared/context/user-context";
import { CartProvider } from "../Shared/context/cart-context";

function App() {
  return (
    <>
      <ModalProvider>
        <UserProvider>
          <CartProvider>
            <BaseStyles />
            <Router />
          </CartProvider>
        </UserProvider>
      </ModalProvider>
    </>
  );
}

export default App;
