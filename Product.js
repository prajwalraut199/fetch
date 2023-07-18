import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div className='product'>
        <div className='product_info'>
            <p>Dental Anatomy (BDS)</p>
            <p className='product_price'>
                <small>$</small>
                <strong>19.99</strong>
            </p>

            <div className='product_rating'>
                <p>🌟🌟🌟</p>
            </div>
        </div>

        <img src="https://bit.ly/DentalAnatomy123" classname='product_image' >
        </img>

        <button> Add to basket </button>
    </div>
  )
}

export default Product
