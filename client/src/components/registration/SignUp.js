import React from 'react';
import "./Login.css"; 
import { NavLink, useNavigate } from "react-router-dom"; 
import  { useState } from "react";
import axios from "axios";

function SignUp() {
 const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

   const navigate = useNavigate();

    const validatePassword = (password) => {
    // Regex: At least 8 chars, 1 uppercase, 1 lowercase, 1 number
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };


  //  const handleSubmit = (e) => {
  //      e.preventDefault();

  //       if (password !== confirmPassword) {
  //     setErrorMessage("Passwords do not match!");
  //     return;
  //   }
  //    if (!validatePassword(password)) {
  //     setErrorMessage(
  //       "Password must be at least 8 characters, contain one uppercase letter, and include both numbers and letters."
  //     );
  //     return;
  //   }
  //         setErrorMessage("");
  //        axios
  //        .post("http://localhost:3000/auth/signup", { firstName,lastName, email, password })
  //        .then((res) => {
  //          console.log(res.data); // see backend response
  //          if (res.data.token) {
  //            // save token for authentication
  //            localStorage.setItem("token", res.data.token);
  //            navigate("/auth/login");
  //          } else {
  //            alert(res.data.message || "Signup failed");
  //          }
  //        })
  //        .catch((err) => {
  //          console.error(err.response ? err.response.data : err.message);
  //          alert(err.response?.data?.message || "Something went wrong");
  //        });

         
       
  //    }

     
 

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }


    if (!validatePassword(password)) {
      setErrorMessage(
        "Password must be at least 8 characters, contain one uppercase letter, and include both numbers and letters."
      );
      return;
    }

    // Clear error if valid
    setErrorMessage("");

    // 3️⃣ Call API
    axios
      .post("http://localhost:3000/auth/signup", {
        name: `${firstName} ${lastName}`,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          navigate("/auth/login");
        } else {
          setErrorMessage(res.data.message || "Signup failed");
        }
      })
      .catch((err) => {
        console.error(err.response ? err.response.data : err.message);
        setErrorMessage(err.response?.data?.message || "Something went wrong");
      });
  };
       
  return (
    <div className="login-container">
        
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">First Name</label>
          <input type="text" id="firstname" name="username"  onChange={(e) => setFirstName(e.target.value)}/>
        </div>
         <div>
            <div>
          <label htmlFor="username">Last Name</label>
          <input type="text" id="lastname" name="username"  onChange={(e) => setLastName(e.target.value)}/>
        </div>
         <div></div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email"  onChange={(e) => setEmail(e.target.value)} />    
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"  onChange={(e) => setPassword(e.target.value)}/>
        </div>
       
       <div>
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" name="password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
        </div>
          {errorMessage && (
          <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
        )}
       
        <button type="submit">SignUp</button>
          <span className="signup-link">
              Already have an account?{" "} 
            
              <NavLink to="/auth/login">Login here</NavLink>
            </span>
      </form>
    </div>
  );
};
export default SignUp;