import React from 'react'
import './product.scss'
import dummyImg from '../../assets/naruto.jpeg'
import { useNavigate } from 'react-router-dom'
const Product = ({product}) => {
  const navigate = useNavigate()
  const productDetail = ()=>{
    navigate(`./products/${product?.attributes.key}`)
    window.scrollTo(0,0)
  }
  return (
    <div className="Product" onClick={productDetail}>
    <div className="product-container">
        <div className="product-img">
            <div className="img-container">
                <img src={product?.attributes.image?.data.attributes.url} alt={product?.attributes.title} id="img"/>
            </div>
        </div>
        <div className="product-info">
            <p className="title">
                {product?.attributes.title}
            </p>
            <p className="price">₹ {product?.attributes.price}</p>
        </div>
        
    </div>
</div>
  )
}

export default Product