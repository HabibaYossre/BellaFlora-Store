/*import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"; 
import  { useState } from "react";
import Checkmail from "./Checkmail.js"
import axios from "axios";


import "./Login.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

     const validatePassword = (password) => {
    // Regex: At least 8 chars, 1 uppercase, 1 lowercase, 1 number
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  const forgetpassword=(e)=>{
    e.preventDefault();
 if (!email) {
      alert("Email is required!");
      return;
    }
     axios
      .post("http://localhost:3000/auth/forgot-password", { email})
      .then((result) => {
         if (result.status===200) {
         navigate("/Checkmail")

        }
         else {

          alert("Invalid email");
        }
      })
       .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });

  }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//  if (!email) {
//       alert("Email is required!");
//       return;
//     }



//     if (!password) {
//       alert("if you forget password click on forget password");
//       return;
//     }

//     /*if (!validatePassword(password)) {
//       setErrorMessage(
//         "Password must be at least 8 characters, contain one uppercase letter, and include both numbers and letters."
//       );
//       return;
//     }
//       setErrorMessage("");*/
//     axios
//       .post("http://localhost:3000/auth/login", { email, password })
//       .then((result) => {
//         //console.log(result);
//         if (result.status===200) {
//           navigate("/Home");
//         } else {
//           alert("Invalid email or password");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//         alert("Something went wrong");
//       });
//   }
/*   const handleSubmit = (e) => {
  e.preventDefault();

  if (!email) {
    alert("Email is required!");
    return;
  }

  if (!password) {
    alert("If you forget password click on forget password");
    return;
  }

  axios
    .post("http://localhost:3000/auth/login", { email, password })
    .then((result) => {
      if (result.status === 200) {
        // ✅ Save token in localStorage
        const token = result.data.token; // make sure backend sends { token: "..." }
        localStorage.setItem("token", token);
     localStorage.setItem("userId", result.data._id);

        // (optional) save userId if backend sends it
        if (result.data.userId) {
          localStorage.setItem("userId", result.data.userId);
        }

        navigate("/Home");
      } else {
        alert("Invalid email or password");
      }
    })
    .catch((err) => {
      console.log(err.response?.data || err.message);
      alert("Something went wrong");
    });
};
 
 


  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email"  value={email} required  onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
           <a href="/Checkmail" className="forgetpass" onClick={forgetpassword}>forget password?</a>
        </div>
         {errorMessage && (
          <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
        )}
        <button type="submit" >Login</button>
         <span className="signup-link">
            Don't have an account?{" "} 
           
          <NavLink to="/auth/signup">Sign up now</NavLink>
          </span>
      </form>
     
    </div>
  );
}

export default Login;*/



import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; 

axios.defaults.withCredentials = true; // important for cookies

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return alert("Email is required!");
    if (!password) return alert("Password is required!");

    try {
      const res = await axios.post(
        "http://localhost:3000/auth/login",
        { email, password },
        { withCredentials: true } // ensures cookies are included
      );

      if (res.status === 200) {
        // ✅ No need to store token in localStorage anymore
        // Backend has already set the cookie
        // You can still store user info if needed
        //localStorage.setItem("user", JSON.stringify(res.data));

        navigate("/Home");
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      setErrorMessage(err.response?.data?.message || "Login failed");
    }
  };

  const forgetPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Email is required!");
      return;
    }
    try {
      const result = await axios.post(
        "http://localhost:3000/auth/forgot-password",
        { email }
      );
      if (result.status === 200) {
        navigate("/Checkmail");
      } else {
        alert("Invalid email");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" id="email" name="email"
            value={email} required
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" id="password" name="password"
            value={password} required
            onChange={(e) => setPassword(e.target.value)} 
          />
          <a href="/Checkmail" className="forgetpass" onClick={forgetPassword}>
            Forget password?
          </a>
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="submit">Login</button>
        <span className="signup-link">
          Don't have an account?{" "}
          <NavLink to="/auth/signup">Sign up now</NavLink>
        </span>
      </form>
    </div>
  );
}

export default Login;
