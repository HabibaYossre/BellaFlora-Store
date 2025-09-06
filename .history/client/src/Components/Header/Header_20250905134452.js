import React, { useState } from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';


function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
    
      <div className="top-bar">
        <div className="left">
          <span>Call Us : +123-456-789</span>
        </div>
        <div className="center">
          <span>
            Sign up and <b>GET 20% OFF</b> for your first order.{" "}
           
          </span>
        </div>
        <div className="right">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

     
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">🌸</span>
          <span className="logo-text">Flower Shop.</span>
        </div>

  
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

   
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><NavLink to="/Home">Home</NavLink></li>
          <li><NavLink to="/product/all">Shop</NavLink></li>
          {/* <li><NavLink to="/Ossions">Occasions</NavLink></li> */}
          {/* <li><NavLink to="/AboutUs">About Us</NavLink></li> */}
          <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
          {/* <li><NavLink to="/Blogs">Blogs</NavLink></li> */}
        </ul>

   
        <div className="icons">
          <NavLink to="/Wishlist"><i className="far fa-heart"></i></NavLink>
          <NavLink to="/Cart"><i className="fas fa-shopping-bag"></i></NavLink>
          <NavLink to="/Profile"><i className="far fa-user"></i></NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
