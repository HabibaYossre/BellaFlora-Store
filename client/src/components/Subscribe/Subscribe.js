
import React from 'react';
import "./Subscribe.css";




function Subscribe() {
    
  return (

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

      );
};

    
 

export default Subscribe;