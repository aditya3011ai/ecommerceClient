import React from "react";
import "./productDetail.scss";
import tempImg from "../../assets/naruto.jpeg";
const ProductDetail = () => {
  return (
    <div className="ProductDetail container">
      <div className="product-layout center">
        <div className="product-img">
            <img src={tempImg} alt="Product Image" id="img" />
        </div>
        <div className="productDetail-info">
          <h2 className="title">This is wall Poster</h2>
          <p className="price">₹ 500</p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            vel sit expedita distinctio consectetur sapiente minima
            exercitationem unde, debitis quos, autem commodi! Cum, illum minus
            in sit sequi velit, temporibus suscipit totam dignissimos eius
            eaque, labore nemo nulla obcaecati fugiat quo repellat rem dolor
            eligendi incidunt! Itaque ratione molestias ullam.
          </p>
          <div className="cart-options">
            <div className="quantity-selector">
              <span className="btn decrement">-</span>
              <span className="quantity">3</span>
              <span className="btn increment">+</span>
            </div>
            <button className="btn-primary add-to-cart">Add To cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
