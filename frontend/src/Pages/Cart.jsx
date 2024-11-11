import React, { useContext } from 'react'; 
import { ShopContext } from '../Context/ShopContext';
import CartItems from '../Components/CartItems/CartItems';
import './CSS/Cart.css'; 

const Cart = () => {
  const { cartItems, all_product } = useContext(ShopContext);

  // Safe check for all_product and cartItems
  const totalPrice = all_product && all_product.length > 0
    ? all_product.reduce((acc, product) => {
        if (cartItems[product.id] > 0) {
          return acc + product.new_price * cartItems[product.id]; 
        }
        return acc;
      }, 0)
    : 0;  // Default to 0 if all_product is not available

  const totalItems = cartItems 
    ? Object.values(cartItems).reduce((acc, count) => acc + count, 0)
    : 0; // Default to 0 if cartItems is not available

  return (
    <div className="cart-container">
      {totalItems > 0 ? (
        <>
          <div className="cart-header">
            <h2>Your Shopping Cart</h2>
            <p>Items in Cart: {totalItems}</p>
          </div>

          <div className="cart-items">
            <CartItems /> {/* Render CartItems component to show each cart item */}
          </div>

          <div className="cart-summary">
            <div className="cart-summary-item">
              <p>Total Price</p>
              <p>${totalPrice.toFixed(2)}</p> {/* Display total price */}
            </div>

            <div className="cart-summary-actions">
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <p>Add items to your cart to get started!</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
