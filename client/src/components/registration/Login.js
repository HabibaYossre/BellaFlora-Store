
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
 if (!email) {
      alert("Email is required!");
      return;
    }

    if (!password) {
      alert("Password is required! if you forget password click on forget password");
      return;
    }
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
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email"  value={email} required  onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password}  onChange={(e) => setPassword(e.target.value)} />
           <a href="/Checkmail" className="forgetpass">forget password?</a>
        </div>
        <button type="submit" >Login</button>
         <span className="signup-link">
            Don't have an account?{" "} 
            {/* <Link to="/SignUp">Sign up now</Link> */}
            <a href="/auth/signup">Sign up now</a>
          </span>
      </form>
     
    </div>
  );
}

export default Login;