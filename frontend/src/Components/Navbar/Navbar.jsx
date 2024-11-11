import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const isLoggedIn = !!localStorage.getItem('auth-token');

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    window.location.replace('/');
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='Logo' />
        <p>SassyCart</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => setMenu('shop')}>
          <Link style={{ textDecoration: 'none' }} to='/'>
            Shop
          </Link>
          {menu === 'shop' && <hr />}
        </li>
        <li onClick={() => setMenu('men')}>
          <Link style={{ textDecoration: 'none' }} to='/men'>
            Men
          </Link>
          {menu === 'men' && <hr />}
        </li>
        <li onClick={() => setMenu('women')}>
          <Link style={{ textDecoration: 'none' }} to='/women'>
            Women
          </Link>
          {menu === 'women' && <hr />}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>
            Kids
          </Link>
          {menu === 'kids' && <hr />}
        </li>
      </ul>

      <div className='nav-login-cart'>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to='/login'>
            <button>Login</button>
          </Link>
        )}
        <Link to='/cart'>
          <img src={cart_icon} alt='Cart Icon' />
          <div className='nav-cart-count'>0</div> {/* Adjust dynamically as needed */}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
