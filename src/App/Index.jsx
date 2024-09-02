import Router from "./Router";
import BaseStyles from "./BaseStyles";
import { UserProvider } from "../Shared/context/user-context";
import { CartProvider } from "../Shared/context/cart-context";
import { ThemeProvider } from "styled-components";
import theme from "../Shared/utils/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <CartProvider>
            <BaseStyles />
            <Router />
          </CartProvider>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
