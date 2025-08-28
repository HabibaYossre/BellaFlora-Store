import React from 'react';
import "./Home.css"; 
import Header from '../Header/Header';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';
// import Header from "../Header";





function Home() {
    
  return (

    <header>
    <Header />
   
     




       <div className="marquee-container">
      <div className="marquee">
        <div className="marquee-content">
          <span>Birthday</span>
          <span className="separator">✿</span>
          <span>Weddings</span>
          <span className="separator">✿</span>
          <span>Thank You</span>
          <span className="separator">✿</span>
          <span>Graduation</span>
          <span className="separator">✿</span>
          
      
          <span>Birthday</span>
          <span className="separator">✿</span>
          <span>Weddings</span>
          <span className="separator">✿</span>
          <span>Thank You</span>
          <span className="separator">✿</span>
          <span>Graduation</span>
          <span className="separator">✿</span>
        </div>
      </div>
    </div>
    <div className="FAQs">
      <h2 className='faq'>FAQs</h2>
      <p className='look'>Question?<span>Look here.</span></p>
       </div>
<div className="container">

      <div className="sitem">

     <div className="item">
      <div className="question">
         <p>Do you offer international shipping?</p>
        </div>
        <div className="answer">
        <p>we ship to most countries worldwide. Shipping fees  vary based on location.</p>
      </div>
     </div>


     <div className="item">
      <div className="question">
         <p>How can I track my order?</p>
        </div>
        <div className="answer">
        <p>Once your order is shipped, you will receive a tracking number via email.</p>
      </div>
     </div>

     <div className="item">
      <div className="question">
         <p>What payment methods do you accept?</p>
        </div>
        <div className="answer">
        <p>We accept all major credit cards, PayPal, and Apple Pay.</p>
      </div>
     </div>
     
     
     </div>
  <div className="contact-card">
      {/* Chat Icon */}
      <div className="chat-icon">
        <div className="bubble white">
          <span className="dots">•••</span>
        </div>
        <div className="bubble pink"></div>
      </div>

      {/* Text */}
      <h2>You have different questions?</h2>
      <p>
        Our team will answer all your questions.
        <br />
        We ensure a quick response.
      </p>

      {/* Button */}
      <button className="contact-btn">Contact Us</button>
    </div>
 </div>
  
 <div className="shipping-info">
      <div className="containershipping-info">
        <div className="info-card">
          <div className="icon-shipping">
            <i className="fas fa-truck"></i>
          </div>
         < div className="text">
          <h3>Free Shipping</h3>
          <p>Free shipping for order above $50</p>
          </div>
        </div>
        
        <div className="info-card">
          <div className="icon-shipping">
            <i className="fas fa-credit-card"></i>
          </div>
          < div className="text">
             <h3>Flexible Payment</h3>
          <p>Multiple secure payment options</p>
          </div>
       
        </div>
        
        <div className="info-card">
          <div className="icon-shipping">
            <i className="fas fa-headset"></i>
          </div>
          < div className="text">
          <h3>24x7 Support</h3>
          <p>We support online all days</p>
          </div>
        </div>
      </div>
    </div>
 
<Subscribe></Subscribe>
   {/* <section className="hero">
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
    </section> */}

    <Footer ></Footer>

{/*     
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

   
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Services</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Return</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

     
        <div className="footer-section">
          <h3>Our Information</h3>
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">User Terms & Condition</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Site Map</a></li>

          </ul>
        </div>

     
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li>+0123-456-789</li>
            <li>example@gmail.com</li>
            <li>8502 Preston Rd. <br/> Inglewood, Maine 98380</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 <b>Flower Shop Website</b>. All Rights Reserved.</p>
        <div className="footer-lang">
          <span>English </span>
          <span>USD </span>
        </div>
      </div>
    </footer> */}
    </header>

      );
};

    
 

export default Home;