import React, { useState, useEffect } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // Store the preview URL
  const [productDetails, setProductDetails] = useState({
    name: '',
    old_price: '',
    new_price: '',
    category: 'women',
  });

  useEffect(() => {
    // Revoke URL to avoid memory leaks
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    Object.keys(productDetails).forEach((key) => {
      formData.append(key, productDetails[key]);
    });

    try {
      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });
      const responseData = await response.json();

      if (response.ok && responseData.success) {
        const productData = {
          ...productDetails,
          image: responseData.image_url,
        };

        const addProductResponse = await fetch('http://localhost:4000/addproduct', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
        });

        const addProductData = await addProductResponse.json();

        if (addProductData.success) {
          alert('Product Added');
        } else {
          alert('Failed to add product');
        }
      } else {
        console.error('Upload failed:', responseData);
      }
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  return (
    <form className='add-product' onSubmit={handleFormSubmit}>
      <div className='addproduct-itemfield'>
        <p>Product Title</p>
        <input
          type='text'
          name='name'
          placeholder='Type here'
          value={productDetails.name}
          onChange={handleInputChange}
        />
      </div>
      <div className='addproduct-price'>
        <div className='addproduct-itemfield'>
          <p>Price</p>
          <input
            type='text'
            name='old_price'
            placeholder='Type here'
            value={productDetails.old_price}
            onChange={handleInputChange}
          />
        </div>
        <div className='addproduct-itemfield'>
          <p>Offer Price</p>
          <input
            type='text'
            name='new_price'
            placeholder='Type here'
            value={productDetails.new_price}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          name='category'
          className='add-product-selector'
          value={productDetails.category}
          onChange={handleInputChange}
        >
          <option value='women'>Women</option>
          <option value='men'>Men</option>
          <option value='kids'>Kids</option>
        </select>
      </div>
      <div className='addproduct-itemfield'>
        <label htmlFor='file-input'>
          {previewUrl ? (
            <img src={previewUrl} alt="Uploaded Thumbnail" className='addproduct-thumbnail-img' />
          ) : (
            <img src={upload_area} alt="Upload" className='addproduct-thumbnail-img' />
          )}
        </label>
        <input
          type='file'
          name='image'
          id='file-input'
          hidden
          onChange={handleImageChange}
        />
      </div>
      <button type='submit' className='addproduct-btn'>ADD</button>
    </form>
  );
};

export default AddProduct;
