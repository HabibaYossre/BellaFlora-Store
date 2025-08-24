import React from 'react';
import "./App.css"; 



function App() {
    
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
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Occasions</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>

        <div className="icons">
          <a href="#"><i className="fas fa-search"></i></a>
          <a href="#"><i className="far fa-heart"></i></a>
          <a href="#"><i className="fas fa-shopping-bag"></i></a>
          <a href="#"><i className="far fa-user"></i></a>
        </div>
      </nav>
   <section className="hero">
        <div className="hero-content">      
            <h1 className='letters-header'> our new letters </h1>
       
            <p className='para'>Subscribe to Our New Letters to <br />
                Get <span className="subscribe"> Updates on Our Lattest Offers</span></p>
            <p className='twen'>Get 20% off on your first order just by subscribe to our newletter</p>

            <div className="subscribe-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
            </div>
                
               
            
            
        </div>
    </section>
    <footer className="footer">
      <div className="footer-container">
      
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">🌸</span>
            <h2>Flower Shop.</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
         <div className="footer-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-x-twitter"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        {/* Customer Services */}
        <div className="footer-section">
          <h3>Customer Services</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Return</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Our Information */}
        <div className="footer-section">
          <h3>Our Information</h3>
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">User Terms & Condition</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Site Map</a></li>

          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li>+0123-456-789</li>
            <li>example@gmail.com</li>
            <li>8502 Preston Rd. <br/> Inglewood, Maine 98380</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright © 2024 <b>Flower Shop Website</b>. All Rights Reserved.</p>
        <div className="footer-lang">
          <span>English </span>
          <span>USD </span>
        </div>
      </div>
    </footer>
    </header>

      );
};

    
 

export default App;
