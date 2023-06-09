import React from "react";
import "./cartItem.scss";
import Img from "../../assets/naruto.jpeg";
import { AiOutlineClose } from "react-icons/ai";
const CartItem = () => {
  return (
    <div className="CartItem">
      <div className="item-img">
        <img src={Img} alt="Item" />
      </div>
      <div className="item-info-wrapper">
      <div className="item-info">
        <p className="title">Product Title</p>
        <p className="price">$ 499</p>
        <div className="quantity-selector">
          <span className="btn decrement">-</span>
          <span className="quantity">3</span>
          <span className="btn increment">+</span>
        </div>
        <p className="total-price"> Total: $499</p>
      </div>
      <div className="item-remove">
        <AiOutlineClose/>
      </div>
      </div>
     
    </div>
  );
};

export default CartItem;
