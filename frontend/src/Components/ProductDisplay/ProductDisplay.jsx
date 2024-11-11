import React, { useContext, useState } from 'react';  
import './ProductDisplay.css';
import star_dull_icon from '../Assets/star_dull_icon.png';
import star_icon from '../Assets/star_icon.png';
import { ShopContext } from '../../Context/ShopContext'; 

const ProductDisplay = ({ product }) => {
    const { addToCart } = useContext(ShopContext);

    // State to manage the currently selected image and size
    const [selectedImage, setSelectedImage] = useState(product?.image || "");
    const [selectedSize, setSelectedSize] = useState(null);

    // Ensure product data is available before rendering
    if (!product) return <div>Product not found</div>;

    // Handle size selection
    const handleSizeSelect = (size) => {
        console.log(`Size selected: ${size}`); // Debugging log
        setSelectedSize(size);
    };

    // Handle image gallery change
    const handleImageClick = (image) => {
        console.log(`Image clicked: ${image}`); // Debugging log
        setSelectedImage(image);
    };

    // Handle Add to Cart click
    const handleAddToCart = () => {
        console.log(`Adding to cart: ${product.id}, Size: ${selectedSize}`); // Debugging log
        if (selectedSize) {
            addToCart(product.id); // Add product to cart if size is selected
        } else {
            alert("Please select a size before adding to cart.");
        }
    };

    return (
        <div className='product-display'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    {/* Dynamically render smaller product images */}
                    {product.images && product.images.map((img, index) => (
                        <img 
                            key={index}
                            src={img} 
                            alt={`product-${index}`}
                            onClick={() => handleImageClick(img)} 
                            className='productdisplay-thumbnail'
                        />
                    ))}
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={selectedImage} alt={product.name} />
                </div>
            </div>

            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star'>
                    {/* Render stars dynamically */}
                    {[...Array(5)].map((_, index) => (
                        <img 
                            key={index}
                            src={index < product.rating ? star_icon : star_dull_icon} 
                            alt='star' 
                        />
                    ))}
                    <p>({product.reviewCount || 122})</p>
                </div>
                <div className='productdisplay-right-price'>
                    <div className='productdisplay-right-price-old'>${product.old_price}</div>
                    <div className='productdisplay-right-price-new'>${product.new_price}</div>
                </div>
                <div className='productdisplay-right-description'>
                    {product.description || "A lightweight, pullover, close-fitting with a round neckline"}
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select size</h1>
                    <div className='productdisplay-right-size-options'>
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <div 
                                key={size} 
                                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                onClick={() => handleSizeSelect(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <button 
                    onClick={handleAddToCart} // Call handleAddToCart on button click
                    disabled={!selectedSize}  // Disable if no size is selected
                >
                    ADD TO CART
                </button>
                <p className='productdisplay-right-category'>
                    <span>Category:</span> {product.category || "Women, T-shirt, Crop Top"}
                </p>
                <p className='productdisplay-right-category'>
                    <span>Tags:</span> {product.tags ? product.tags.join(", ") : "Modern, Latest"}
                </p>
            </div>
        </div>
    );
};

export default ProductDisplay;

