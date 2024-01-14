import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemCartHandler = (item) => {
    let foundItem = items.find((newItem) => newItem.name === item.name);

    if (foundItem === undefined) {
      updateItems([...items, { ...item, quantity: Number(item.quantity) }]);
    } else {
      foundItem.quantity += Number(item.quantity);
      updateItems([...items]);
    }
  };

  const removeItemHandler = (item) => {
    const updatedItems = [...items];

    const foundItemIndex = updatedItems.findIndex(
      (newItem) => newItem.name === item.name
    );

    if (foundItemIndex !== -1) {
      if (updatedItems[foundItemIndex].quantity > 1) {
        updatedItems[foundItemIndex].quantity -= 1;
      } else {
        updatedItems.splice(foundItemIndex, 1);
      }

      updateItems(updatedItems);
    }
  };

  const cartContext = {
    items: items,
    addItem: addItemCartHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
