
import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";
import axios from "axios";

const CartProvider = (props) => {
  const apiUrl =
    "https://crudcrud.com/api/7178d6d205bd46e5b2b015be500cc21a/cart";

  
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [items, updateItems] = useState(initialCart);

  const getItem = async () => {
    try {
      const response = await axios.get(apiUrl);
      updateItems(response.data);
    } catch (error) {
      console.log("error fetching cart cart items", error);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  const updateLocalStorage = (cartData) => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  const addItemCartHandler = async (item) => {
    try {
      let foundItem = items.find((newItem) => newItem.name === item.name);

      if (foundItem === undefined) {
        const response = await axios.post(apiUrl, {
          ...item,
          quantity: Number(item.quantity),
        });

        updateItems([...items, response.data]);
        updateLocalStorage([...items, response.data]);
      } else {
        foundItem.quantity += Number(item.quantity);
         await axios.put(`${apiUrl}/${foundItem._id}`, {
          quantity: foundItem.quantity,
        });

        updateItems([...items]);
        updateLocalStorage([...items]);
      }
    } catch (error) {
      console.log("Error adding item to the cart", error);
    }
  };

  const removeItemHandler = async (item) => {
    try {
      const updatedItems = [...items];
      const foundItemIndex = updatedItems.findIndex(
        (newItem) => newItem.name === item.name
      );

      if (foundItemIndex !== -1) {
        if (updatedItems[foundItemIndex].quantity > 1) {
          updatedItems[foundItemIndex].quantity -= 1;
          await axios.put(
            `${apiUrl}/${updatedItems[foundItemIndex]._id}`,
            {
              quantity: updatedItems[foundItemIndex].quantity,
            }
          );
          updateItems(updatedItems);
          updateLocalStorage(updatedItems);
        } else {
           await axios.delete(
            `${apiUrl}/${updatedItems[foundItemIndex]._id}`
          );
          updatedItems.splice(foundItemIndex, 1);
          updateItems(updatedItems);
          updateLocalStorage(updatedItems);
        }
      }
    } catch (error) {
      console.log("Error removing item from the cart", error);
    }
  };

  const finalOrder = () => {
    updateItems([]);
    updateLocalStorage([]);
  };

  const cartContext = {
    items: items,
    addItem: addItemCartHandler,
    removeItem: removeItemHandler,
    orderItem: finalOrder,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
