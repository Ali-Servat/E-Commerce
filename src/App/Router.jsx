import RootLayout from "../pages/Layouts/RootLayout";
import Home from "../pages/Home/Home";
import ItemPage from "../pages/ItemPage/ItemPage";
import Login from "../pages/Login/Login";
import CartDetails from "../pages/Cart/CartDetails/CartDetails";
import CartPage from "../pages/Cart/CartPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<Navigate to="home" />} index />
          <Route path="/home" element={<Home />} />
          <Route path="guarantee" element={<div>Guarantee</div>} />
          <Route path="about" element={<div>about</div>} />
          <Route path="contact" element={<div>contact</div>} />
        </Route>
        <Route path="products">
          <Route path={":itemId"} element={<ItemPage />}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<CartPage />}>
          <Route path=":cartId" element={<CartDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
