import React from 'react';
import "./Login.css"; 
import { useNavigate } from "react-router-dom";
function SignUp() {
   const navigate = useNavigate();
  
    const handleSignUp = (e) => {
      e.preventDefault();
     
      navigate("/App");
      };
  return (
    <div className="login-container">
        
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
         <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />    
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
       
       <div>
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" name="password" />
        </div>
       
        <button type="submit" >SignUp</button>
          <span className="signup-link">
              Already have an account?{" "} 
              <a href="/Login">Login here</a>
            </span>
      </form>
    </div>
  );
};
export default SignUp;