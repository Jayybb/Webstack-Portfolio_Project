import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: '',
    image: '',
    category: 'women',
    new_price: '',
    old_price: '',
  });

  // Handle image file selection
  const imageHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setProductDetails({ ...productDetails, image: file });
  };

  // Handle input changes for text and select fields
  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const Add_Product = async () => {
    // Validate all fields before proceeding
    if (!productDetails.name || !productDetails.old_price || !productDetails.new_price || !productDetails.image) {
      alert('Please fill all the fields and upload an image');
      return;
    }

    // For now, just log the product details
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch('http://localhost:4000/upload',{
      method: 'POST', 
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp)=>resp.json().then((data)=>{responseData=data}))
    if (responseData.success)
      {
          product.image = responseData.image_url;
          console.log(product);
          await fetch('http://localhost:4000/addproduct', {
            method: 'POST',
            headers:{
              Accept:'application/json',
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(product),
          }).then((resp)=>resp.json()).then((data)=>{
            data.success?alert('Product Added'):alert('Failed')
          })
    }
  };

  return (
    <div className='addproduct'>
      <h1>Add New Product</h1>

      {/* Product Title */}
      <div className='addproduct-itemfield'>
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type='text'
          name='name'
          placeholder='Type Here'
        />
      </div>

      {/* Price and Offer Price */}
      <div className='addproduct-price'>
        <div className='addproduct-itemfield'>
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type='text'
            name='old_price'
            placeholder='Type Here'
          />
        </div>
        <div className='addproduct-itemfield'>
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type='text'
            name='new_price'
            placeholder='Type Here'
          />
        </div>
      </div>

      {/* Product Category */}
      <div className='addproduct-itemfield'>
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name='category'
          className='add-product-selector'
        >
          <option value='women'>Women</option>
          <option value='men'>Men</option>
          <option value='kids'>Kids</option>
        </select>
      </div>

      {/* Image Upload */}
      <div className='addproduct-itemfield'>
        <label htmlFor='file-input'>
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt='Upload Preview'
            className='addproduct-thumbnail-img'
          />
        </label>
        <input
          onChange={imageHandler}
          type='file'
          name='image'
          id='file-input'
          hidden
        />
      </div>

      {/* Submit Button */}
      <button onClick={Add_Product} className='addproduct-btn'>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;