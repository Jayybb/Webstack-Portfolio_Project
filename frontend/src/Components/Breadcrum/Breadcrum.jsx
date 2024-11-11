import React from 'react';
import './Breadcrum.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;

  // Check if product is available and contains the necessary properties
  if (!product) return null; // If no product is passed, don't render the breadcrumb

  return (
    <div className='breadcrum'>
      <Link to="/">HOME</Link>
      <img src={arrow_icon} alt='Arrow icon pointing right' />
      <Link to="/shop">SHOP</Link>
      <img src={arrow_icon} alt='Arrow icon pointing right' />
      <Link to={`/shop/${product.category}`}>{product.category}</Link>
      <img src={arrow_icon} alt='Arrow icon pointing right' />
      <span>{product.name}</span>
    </div>
  );
}

// Prop validation for product prop
Breadcrum.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default Breadcrum;