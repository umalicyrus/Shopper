import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [menu, setMenu] = React.useState('shop');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const {getTotalCartItems} = React.useContext(ShopContext);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} className="logo-img" alt="Shopper Logo" />
        <p>Shopper</p>
      </div>

      <button className="nav-toggle" onClick={handleToggle}>
        ☰
      </button>

      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li
          className={menu === 'shop' ? 'active' : ''}
          onClick={() => {
            setMenu('shop');
            setIsMenuOpen(false);
          }}
        >
          <Link to="/">Shop</Link>
        </li>
        <li
          className={menu === 'mens' ? 'active' : ''}
          onClick={() => {
            setMenu('mens');
            setIsMenuOpen(false);
          }}
        >
          <Link to="/mens">Men</Link>
        </li>
        <li
          className={menu === 'womens' ? 'active' : ''}
          onClick={() => {
            setMenu('womens');
            setIsMenuOpen(false);
          }}
        >
          <Link to="/womens">Women</Link>
        </li>
        <li
          className={menu === 'kids' ? 'active' : ''}
          onClick={() => {
            setMenu('kids');
            setIsMenuOpen(false);
          }}
        >
          <Link to="/kids">Kids</Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <div className="cart-container">
          <Link to="/cart">
            <img src={cart_icon} className="cart-icon" alt="Cart" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};
