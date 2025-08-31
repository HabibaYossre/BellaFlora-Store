import React from 'react';
import "./Marquee.css";

function Marquee() {

  return (
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
          <span>Birthday</span>
          <span className="separator">✿</span>
          
        </div>
      </div>
    </div>
    );
};
export default Marquee;