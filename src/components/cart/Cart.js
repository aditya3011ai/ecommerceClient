import React from "react";
import "./cart.scss";
import {AiOutlineClose} from 'react-icons/ai'
import CartItem from "../cartItem/CartItem";
const Cart = ({setShowCart}) => {
  return (
    <div className="Cart">
      <div className="overlay" onClick={()=>setShowCart(false)}></div>
      <div className="cart-content">
        <div className="header">
          <h3>Shopping Cart</h3>
          <div className="close-btn" onClick={()=>setShowCart(false)} >
            <AiOutlineClose /> Close
          </div>
        </div>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <div className="checkout-info">
          <div className="total-amount">
            <h3 className="total-message">Total:</h3>
            <h3 className="total-amount">$ 230</h3>
          </div>
          <div className="checkout btn-primary center">Checkout Now</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
