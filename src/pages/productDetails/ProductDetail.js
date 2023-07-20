import React from "react";
import "./productDetail.scss";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { useState,useEffect } from "react";
import Loader from "../../components/loader/Loader";
const ProductDetail = () => {
  const params = useParams()
  const [product, setProduct] = useState()
  const [isLoading, setisLoading] = useState(true)
  const fetchData = async()=>{
    const productResponse = await axiosClient.get(`/products?filters[key][$eq]=${params.id}&populate=*`)
    if(productResponse.data.data.length >0){
    setProduct(productResponse.data.data[0])

    }
    setisLoading(false)
  }
  useEffect(() => {
    fetchData()
     // eslint-disable-next-line
  }, [params])
  if(isLoading){
    return <div className="loader"><Loader/></div>
  }
  
  return (    
    <div className="ProductDetail container">
      <div className="product-layout center">
        <div className="product-img">
            <img src={product?.attributes.image.data.attributes.url} alt="Product" id="img" />
        </div>
        <div className="productDetail-info">
          <h2 className="title">{product?.attributes.title}</h2>
          <p className="price">₹ {product?.attributes.price}</p>
          <p className="description">
            {product?.attributes.desc}
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
