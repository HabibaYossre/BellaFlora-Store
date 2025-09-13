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
    const userId = localStorage.getItem("userId");

 if (userId) {
  console.log("User ID:", userId);
} else {
  console.log("No user found");
}
    if (!email) return alert("Email is required!");
    if (!password) return alert("Password is required!");

    if(email==="admin@gmail.com"&&password==="1234Admin"){
      navigate("/Admin")
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
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
        `${process.env.REACT_APP_BACKEND_URL}/auth/forgot-password`,
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
