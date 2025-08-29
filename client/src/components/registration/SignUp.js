import React from 'react';
import "./Login.css"; 
import { useNavigate } from "react-router-dom"; 
import  { useState } from "react";
import axios from "axios";

function SignUp() {
   const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   const navigate = useNavigate();
  
   const handleSubmit = (e) => {
       e.preventDefault();
      
       /*axios
         .post("http://localhost:3000/auth/signup", { name,email, password })
         .then((result) => {
           console.log(result);
           navigate("/Home");

           /*if (result.data === "Success") {
             navigate("/Home");
           }else {
             alert("Invalid email or password");
           }
         })
         .catch((err) => {
           console.log(err);
           alert("Something went wrong");
         });*/

         axios
         .post("/auth/signup", { name, email, password })
         .then((res) => {
           console.log(res.data); // see backend response
           if (res.data.token) {
             // save token for authentication
             localStorage.setItem("token", res.data.token);
             navigate("/Home");
           } else {
             alert(res.data.message || "Signup failed");
           }
         })
         .catch((err) => {
           console.error(err.response ? err.response.data : err.message);
           alert(err.response?.data?.message || "Something went wrong");
         });
       
     }
       
  return (
    <div className="login-container">
        
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username"  onChange={(e) => setName(e.target.value)}/>
        </div>
         <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email"  onChange={(e) => setEmail(e.target.value)} />    
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"  onChange={(e) => setPassword(e.target.value)}/>
        </div>
       
       <div>
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" name="password" />
        </div>
       
        <button type="submit" >SignUp</button>
          <span className="signup-link">
              Already have an account?{" "} 
              <a href="/auth/login">Login here</a>
            </span>
      </form>
    </div>
  );
};
export default SignUp;