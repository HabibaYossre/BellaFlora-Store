
import React from 'react';
import "./Shipping.css";


function Shipping() {
    return (
      
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
    );
}
export default Shipping;