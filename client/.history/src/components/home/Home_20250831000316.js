import React from 'react';
import "./Home.css"; 
import Header from '../Header/Header';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';
import Marquee from '../Marquee/Marquee';
import Shipping from '../Shipping/Shipping';
// import Header from "../Header";





function Home() {

  return (

 
   <>
     
<Marquee></Marquee>
<div className="follow-insta">
  <span className='insta-follow'>Follow us </span>
  <p className='insta-p'> Follow Us on <span className='insta-span'> Instagram</span></p>
  
  </div>
   <div className="image-grid">
    <div className="image2-item">
  <div className="image-item">
    <img src="/images/istockphoto-1270914034-612x612.jpg" alt="Image 1" />
  </div>
  <div className="image-item">
    <img src="/images//vecteezy_woman-holding-flower-bouquet_26992162.jpg" alt="Image 2" />
  </div>
  </div>
  <div className="image-item-single">
    <img src="/images/pexels-roman-odintsov-6022828.jpg" alt="Image 3" />
  </div>
   <div className="image2-item">
  <div className="image-item">
    <img src="/images/pexels-roman-odintsov-6022838.jpg" alt="Image 4" />
  </div>
  <div className="image-item">
    <img src="/images/pexels-emma-bauso-1183828-3585806.jpg" alt="Image 5" />
  </div>
  </div>
 
</div>
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
  

 <Shipping />
<Subscribe></Subscribe>

</>

      );
};

    
 

export default Home;