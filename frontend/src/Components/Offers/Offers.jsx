import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className= 'offers'>
        <div className= 'offers-left'>
            <h1>Offers For You</h1>
            <p>JUST FOR BEST SELLER PRODUCTS</p>
            <button>See Now</button>
            </div> 
            <div className= 'offers-right'>
                <img src={exclusive_image} alt='Exclusive offers'/>
            </div>
     </div>
  )
}

export default Offers
