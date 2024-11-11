import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'; 
import './CartItems.css';

const CartItems = () => {
  const { cartItems, all_product = [], removeFromCart } = useContext(ShopContext); // Default to an empty array if undefined

  // Calculate subtotal only if all_product is defined and not empty
  const subtotal = all_product.reduce((acc, e) => {
    return acc + (e.new_price * (cartItems[e.id] || 0));
  }, 0);

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className='cartitems-format cartitems-format-main'>
                <img src={e.image} alt='' className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <p className='cartitems-quantity'>{cartItems[e.id]}</p>
                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                <img 
                  src={remove_icon} 
                  onClick={() => removeFromCart(e.id)} 
                  alt='Remove item' 
                  className='remove-icon'
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
          <h1>Cart Totals</h1>
        </div>
        <div className='cartitems-total-item'>
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <hr />
        <div className='cartitems-total-item'>
          <p>Shipping Fee</p>
          <p>Free</p>
        </div>
        <hr />
        <div className='cartitems-total-item'>
          <h3>Total</h3>
          <p>${subtotal.toFixed(2)}</p>
        </div>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <div className='cartitems-promocode'>
        <p>If you have a promo code, enter it here</p>
        <div className='cartitems-promobox'>
          <input type='text' placeholder='Promo code' />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
