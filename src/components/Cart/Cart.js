import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);


  const itemRemoveHandler = (item) => {
    cartCtx.removeItem(item); 
  };

  
  const cartItems = (
    <ul className={classes["cart-item"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <span>Rs {item.price}</span>
          <span>x {item.quantity}</span>
          <span>
            <button onClick={() => itemRemoveHandler(item)}>Remove</button>
          </span>          
        </li>
      ))}
    </ul>
  );

  let sum = 0;
  cartCtx.items.forEach((item) => {
    sum = sum + item.price * item.quantity;
  });

  return (
    <Modal onClose={props.onClose}>
      {cartItems}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs {sum}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.orderBtn}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;





