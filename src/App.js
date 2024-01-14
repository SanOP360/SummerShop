import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Shops from "./components/Tshirts/shops";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { TshirtProvider } from "./store/TshirtContext"; // Import TshirtProvider

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
        {" "}
        {/* Wrap your components with TshirtProvider */}
        {isVisible && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Shops />
        </main>
      </TshirtProvider>
    </CartProvider>
  );
}

export default App;
