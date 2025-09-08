import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Checkmail from "./Checkmail.js";
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

  const forgetpassword = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Email is required!");
      return;
    }
    axios
      .post("http://localhost:3000/auth/forgot-password", { email })
      .then((result) => {
        if (result.status === 200) {
          navigate("/Checkmail");
        } else {
          alert("Invalid email");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Email is required!");
      return;
    }

    if (!password) {
      alert("if you forget password click on forget password");
      return;
    }

    /*if (!validatePassword(password)) {
      setErrorMessage(
        "Password must be at least 8 characters, contain one uppercase letter, and include both numbers and letters."
      );
      return;
    }
      setErrorMessage("");*/
    axios
      .post("http://localhost:3000/auth/login", { email, password })
      .then((result) => {
        //console.log(result);
        if (result.status === 200) {
          localStorage
          navigate("/Home");
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="/Checkmail" className="forgetpass" onClick={forgetpassword}>
            forget password?
          </a>
        </div>
        {errorMessage && (
          <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
        )}
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
