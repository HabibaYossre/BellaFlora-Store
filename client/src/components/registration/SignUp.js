import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Password validation
  const validatePassword = (password) => {
    // Regex: At least 8 chars, 1 uppercase, 1 lowercase, 1 number
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage(
        "Password must be at least 8 characters, contain one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }

    // Clear error if valid
    setErrorMessage("");

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, {
        name: fullName,
        email,
        phone,
        password,
      })
      .then((res) => {
        // Adjust this based on your backend response
        if (res.status === 201 || res.data.success) {
          navigate("/auth/login");
        } else {
          alert(res.data.message || "Signup failed");
        }
      })
      .catch((err) => {
        console.error(err.response ? err.response.data : err.message);
        alert(err.response?.data?.message || "Something went wrong");
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {errorMessage && (
          <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
        )}

        <button type="submit">Sign Up</button>

        <span className="signup-link">
          Already have an account?{" "}
          <NavLink to="/auth/login">Login here</NavLink>
        </span>
      </form>
    </div>
  );
}

export default SignUp;
