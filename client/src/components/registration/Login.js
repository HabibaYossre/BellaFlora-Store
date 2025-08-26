
import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Login.css"; 

function Login() {
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
   
    navigate("/App");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" >Login</button>
         <span className="signup-link">
            Don't have an account?{" "} 
            <a href="/SignUp">Sign up now</a>
          </span>
      </form>
     
    </div>
  );
}

export default Login;