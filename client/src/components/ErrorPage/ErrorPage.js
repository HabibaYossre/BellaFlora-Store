import React from "react";
import "./ErrorPage.css";
import Home from "../home/Home";
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
     const navigate = useNavigate();
     const handleerror=()=>{
      navigate('/Home');
     }
  return (
    <div className="error-container">
      <div className="error-card">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <button
          className="home-button"
          onClick={handleerror}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
