import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


function Resetpass() {
     const navigate = useNavigate();
    const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password reset logic here
    alert("Password has been reset!");
    navigate("/auth/login");
  }
  return (
    <div>
   <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newpassword">New Password</label>
          <input type="password" id="newpassword" name="newpassword"   />
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" name="password"  />
        </div>
        <button type="submit" >Update Password</button>
        
      </form>
     
    </div>
    </div>
  );
}
export default Resetpass;