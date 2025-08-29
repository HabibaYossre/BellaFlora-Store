import React from "react";
import "./Checkmail.css";

function Checkmail() {
  return (
    <div className="check-email-container">
      <div className="check-email-card">
        <h2>Check your email !</h2>
        <p>
          We’ve sent you a link to reset your password. Please check your inbox
          and follow the instructions.
        </p>
        <button
          className="back-button"
          
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Checkmail;
