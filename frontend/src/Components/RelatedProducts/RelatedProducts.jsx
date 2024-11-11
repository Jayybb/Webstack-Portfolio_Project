import React from 'react';
import './RelatedProducts.css';
import { Link } from 'react-router-dom';
import data_product from '../Assets/data'


const RelatedProducts = ({ relatedProducts }) => {
 

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className='relatedproducts-item'>
        {data_product.map((item) => (
          <div key={item.id} className="collection-item">
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.name} />
            </Link>
            <p>{item.name}</p>
            <p>New Price: ${item.new_price.toFixed(2)}</p> 
            <p>Old Price: ${item.old_price.toFixed(2)}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

