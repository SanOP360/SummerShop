import React, { useState } from "react";
import Header from "./components/Layout/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { TshirtProvider } from "./store/TshirtContext"; 
import ShopForm from "./components/Tshirts/ShopForm";
import AvailableTshirts from "./components/Tshirts/AvailableTshirts";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const showCartHandler = () => {
    setIsVisible(true);
  };

  const hideCartHandler = () => {
    setIsVisible(false);
  };

  return (
    <CartProvider>
      <TshirtProvider>
        {isVisible && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Routes>
            <Route path="/Form" element={<ShopForm />} />
            <Route path="/Product" element={<AvailableTshirts/>} />
          </Routes>
        </main>
      </TshirtProvider>
    </CartProvider>
  );
}

export default App;

