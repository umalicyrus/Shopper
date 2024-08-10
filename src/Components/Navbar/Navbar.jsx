import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';


import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
export const Navbar = () => {
  const [menu, setMenu] = React.useState('shop');
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} className="logo-img" alt="" />
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration: 'none'}} to='/mens'>Men</Link> {menu==="mens"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration: 'none'}} to='/womens'>Women</Link> {menu==="womens"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link> {menu==="kids"?<hr />:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} className="cart-icon" alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
