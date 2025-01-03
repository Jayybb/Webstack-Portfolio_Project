import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'

const SideBar = () => {
  return (
    <div className='sidebar'>
      {/* Add Product Link */}
      <Link to='/addproduct' style={{ textDecoration: 'none' }}>
        <div className='sidebar-item'>
          <img src={add_product_icon} alt='Add Product Icon' />
          <p>Add Product</p>
        </div>
      </Link>

      {/* List Product Link */}
      <Link to='/listproduct' style={{ textDecoration: 'none' }}>
        <div className='sidebar-item'>
          <img src={list_product_icon} alt='List Product Icon' />
          <p>List Product</p>
        </div>
      </Link>
    </div>
  )
}

export default SideBar
