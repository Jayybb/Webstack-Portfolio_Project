import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box-fade'>Reviews (112)</div>
        </div>
      <div className='descriptionbox-description'>
        <p>An e-commerce website is an online platform or store where businesses and individuals can buy and sell goods or services over the internet. The term "e-commerce" stands for electronic commerce, which refers to any transaction conducted via the internet.</p>
        <p>At SassyCart, we believe shopping should be as fun and easy as it is stylish. Whether you're looking for the latest trends in fashion, must-have accessories, or the perfect gift, we've got you covered. Our curated collections bring you the best of chic, modern, and timeless pieces, all in one place</p>
        </div>
    </div>
  )
}

export default DescriptionBox
