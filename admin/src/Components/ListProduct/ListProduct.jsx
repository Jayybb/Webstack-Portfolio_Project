import React, { useState, useEffect } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  // Fetch product information
  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproducts');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setAllProducts(data);
      setLoading(false); // Data has been loaded
    } catch (error) {
      setError(error.message); // Handle error
      setLoading(false); // Stop loading state
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []); // Empty dependency array, meaning it only runs once when the component is mounted

  // Handle product removal
  const remove_product = async (id) => {
    try {
      const response = await fetch('http://localhost:4000/products/removeproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), // Corrected the body format
      });

      if (response.ok) {
        setAllProducts(allproducts.filter((product) => product.id !== id)); // Update the UI after deletion
      } else {
        console.error('Failed to remove product');
      }
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className='listproduct-format-main'>
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className='listproduct-allproducts'>
        <hr />
        {allproducts.length > 0 ? (
          allproducts.map((product) => ( // Use 'product' consistently
            <div key={product.id} className='listproduct-format-main list-product-format'>
              <img className='listproduct-product-icon' src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.old_price}</p>
              <p>{product.new_price}</p>
              <p>{product.category}</p>
              <img
                className='listproduct-remove-icon'
                src={cross_icon}
                alt='Remove'
                onClick={() => remove_product(product.id)} // Call the remove_product function here
              />
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
