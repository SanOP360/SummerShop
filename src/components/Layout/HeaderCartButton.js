import React from 'react'
import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from "./HeaderCartButton.module.css";
import CartContext from '../../store/CartContext';

const HeaderCartButton=props=>{
    const cartCtx=useContext(CartContext);
    let quantity=0;
    cartCtx.items.forEach(item=>{
        quantity=quantity+ Number(item.quantity)

    });

    quantity = isNaN(quantity) ? 0 : quantity;
    

    return <button className={classes.Button} onClick={props.onClick} >
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{quantity}</span>
    </button>

}

export default HeaderCartButton