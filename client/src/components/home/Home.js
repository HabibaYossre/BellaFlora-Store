import React from 'react';
import "./Home.css"; 
import Header from '../Header/Header';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';
import Marquee from '../Marquee/Marquee';
// import Header from "../Header";





function Home() {
    
  return (

    <header>
    <Header />
   
     

<Marquee></Marquee>


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


    <Footer ></Footer>


    </header>

      );
};

    
 

export default Home;