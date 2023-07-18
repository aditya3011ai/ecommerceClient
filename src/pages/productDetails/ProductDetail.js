import React from "react";
import "./productDetail.scss";
import tempImg from "../../assets/naruto.jpeg";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { useState } from "react";
const ProductDetail = () => {
  const params = useParams()
  const [products, setProducts] = useState()
  const fetchData = async()=>{
    const productResponse = await axiosClient.get(`/products?filters[key][$eq]=${params.productId}`)
    if(productResponse.data.data.length >0){
    setProducts(productResponse.data.data[0])
    }
  }
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
