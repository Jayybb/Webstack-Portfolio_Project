import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';  
import './NavBar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png'

const NavBar = () => {
  const [menu, setMenu] = useState('shop');
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='Logo'/>
        <p>SASSYCART</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=''/>
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => setMenu('shop')} className={menu === 'shop' ? 'active' : ''}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
        </li>
        <li onClick={() => setMenu('men')} className={menu === 'men' ? 'active' : ''}>
          <Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>
        </li>
        <li onClick={() => setMenu('women')} className={menu === 'women' ? 'active' : ''}>
          <Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>
        </li>
        <li onClick={() => setMenu('kids')} className={menu === 'kids' ? 'active' : ''}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
        </li>
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      :<Link to='/login'>
      <button>Login</button>
    </Link>}
       <Link to='/cart'>
          <img src={cart_icon} alt='Cart'/>
        </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default NavBar;
