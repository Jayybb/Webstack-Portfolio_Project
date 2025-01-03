import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}> 
              <div className="cartitems-format">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p> 
                <img 
                  src={remove_icon} 
                  alt="Remove" 
                  className="cartitems-remove-icon" 
                  onClick={() => removeFromCart(e.id)} 
                />
              </div>
              <hr />
            </div>
          );
        } else {
          return null; 
        }
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
          <h1>Cart Totals</h1>
        </div>
        <div className='cartitems-total-items'>
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr/>
        <div className='cartitems-total-items'>
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <hr/>
        <div className='cartitems-total-items'>
          <h3>Total</h3>
          <h3>${getTotalCartAmount()}</h3> {/* Call the function to get the total amount */}
        </div>
        <button>PROCEED TO CHECKOUT</button>
      </div>

      {/* Promo code section */}
      <div className='cartitems-promocode'>
        <p>If you have a promo code, Enter it here</p>
        <div className=' cartitems-promobox'>
          <input type='text' placeholder='promocode'/>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
