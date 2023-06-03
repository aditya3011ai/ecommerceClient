import React from 'react'
import './product.scss'
import dummyImg from '../../assets/naruto.jpeg'
const Product = () => {
  return (
    <div className='Product'>
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