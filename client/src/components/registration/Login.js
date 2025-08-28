
import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import  { useState } from "react";
import axios from "axios";


import "./Login.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/auth/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/Home");
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  }
    
 


  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username"   onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"   onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" >Login</button>
         <span className="signup-link">
            Don't have an account?{" "} 
            {/* <Link to="/SignUp">Sign up now</Link> */}
            <a href="/SignUp">Sign up now</a>
          </span>
      </form>
     
    </div>
  );
}

export default Login;