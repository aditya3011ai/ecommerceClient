import React from 'react'
import './product.scss'
import dummyImg from '../../assets/naruto.jpeg'
import { useNavigate } from 'react-router-dom'
const Product = () => {
  const navigate = useNavigate()
  const productDetail = ()=>{
    window.scrollTo(0,0)
    navigate('./products/edf')
  }
  return (
    <div className='Product' onClick={productDetail}>
      <div className='product-container'>
        <div className='product-img'>
          <div className='img-container'>
            <img src={dummyImg} alt='Product'
            id='img'
            />
          </div>
        </div>
        <div className='product-info'>
          <p className='title'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam.
          </p>
          <p className='price'>$400</p>
        </div>
      </div>
    </div>
  )
}

export default Product