import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className= 'descriptionbox-nav-box'>Description</div>
            <div className= 'descriptionbox-nav-box-fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>SassyCart is a sleek, fashion-centered e-commerce web app designed to make shopping for clothing items effortless and enjoyable. It features a modern, aesthetically pleasing interface where users can browse through categories like men’s, women’s, and kids' fashion. Each product displays clear images, detailed descriptions, and price comparisons to help shoppers make informed choices. With convenient size selection, easy navigation, and a responsive “Add to Cart” feature, SassyCart combines functionality with style, delivering a delightful shopping experience tailored for today’s trend-conscious customers.</p>
            <p>SassyCart is a stylish e-commerce platform offering trendy clothing for men, women, and kids. With sleek design, clear pricing, and easy size selection, it’s built for a seamless shopping experience. Optimized with React and Vite, SassyCart is fast, user-friendly, and perfect for modern, fashion-conscious shoppers.</p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
