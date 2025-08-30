import React from 'react';
import "./Header.css";




function Header() {
    
  return (

    <header>
   
      <div className="top-bar">
        <div className="left">
          <span>Call Us : +123-456-789</span>
        </div>
        <div className="center">
          <span>
            Sign up and <b>GET 20% OFF</b> for your first order.{" "}
            <a href="#signup">Sign up now</a>
          </span>
        </div>
        <div className="right">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-x-twitter"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

   
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">🌸</span>
          <span className="logo-text">Flower Shop.</span>
        </div>

        <ul className="nav-links">
          <li><a href="/Home">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Occasions</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>

        <div className="icons">
          <a href="#"><i className="fas fa-search"></i></a>
          <a href="/Wishlist"><i className="far fa-heart"></i></a>
          <a href="/Cart"><i className="fas fa-shopping-bag"></i></a>
          <a href="#"><i className="far fa-user"></i></a>
        </div>
      </nav>
      </header>

      );
};

    
 

export default Header;