import Router from "./Router";
import BaseStyles from "./BaseStyles";
import { UserProvider } from "../Shared/context/user-context";
import { CartProvider } from "../Shared/context/cart-context";

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <BaseStyles />
          <Router />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
