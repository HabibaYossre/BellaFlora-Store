/*import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Login.css";



function Resetpass() {
     const navigate = useNavigate();
     const [pass, setPassword] = useState("");
     const [confirmPass, setConfirmPassword] = useState("");
      
       const [errorMessage, setErrorMessage] = useState("");
      const { token } = useParams(); // get token from URL

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

    const handleReset = (e) => {
    e.preventDefault();
     if (!pass || !confirmPass) {
      setErrorMessage("Both fields are required!");
      return;
    }

    if (pass !== confirmPass) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    if (!validatePassword(pass)) {
      setErrorMessage(
        "Password must be at least 8 characters, contain one uppercase letter, and include numbers."
      );
      return;
    }

    /*axios
         .post( `http://localhost:3000/auth/reset-password/${token}`, {pass})
         .then((res) => {
           console.log(res.data); // see backend response
           if (res.data.token) {
             // save token for authentication
             localStorage.setItem("token", res.data.token);
             navigate("/auth/login");
           } else {
             alert(res.data.message || "Signup failed");
           }
         })
         .catch((err) => {
           console.error(err.response ? err.response.data : err.message);
           alert(err.response?.data?.message || "Something went wrong");
         });
         axios
         .post(`http://localhost:3000/auth/reset-password/${token}`, { password: pass }, { withCredentials: true })
         .then((res) => {
           console.log(res.data);
           alert(res.data.message);
           navigate("/Home"); // or dashboard
         })
         .catch((err) => {
           console.error(err.response ? err.response.data : err.message);
           alert(err.response?.data?.message || "Something went wrong");
         });
       
  }
  return (
    <div>
   <div className="login-container">
      <form onSubmit={handleReset}>
        <div>
          <label htmlFor="newpassword">New Password</label>
          <input type="password" id="newpassword" name="newpassword" required value={pass} onChange={(e) => setPassword(e.target.value)}  />
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" name="password" required value={confirmPass} onChange={(e) => setConfirmPassword(e.target.value)}  />
        </div>
            {errorMessage && (
          <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
        )}
        <button type="submit" >Update Password</button>
        
      </form>
     
    </div>
    </div>
  );
}
export default Resetpass;*/


import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Resetpass() {
  const navigate = useNavigate();
  const { token } = useParams(); // <-- works if route is /reset-password/:token

  const [pass, setPassword] = useState("");
  const [confirmPass, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  const handleReset = (e) => {
    e.preventDefault();

    if (!pass || !confirmPass) {
      setErrorMessage("Both fields are required!");
      return;
    }
    if (pass !== confirmPass) {
      setErrorMessage("Passwords do not match!");
      return;
    }
    if (!validatePassword(pass)) {
      setErrorMessage(
        "Password must be at least 8 characters, contain one uppercase letter, and include numbers."
      );
      return;
    }

    axios
      .post(
        `http://localhost:3000/auth/reset-password/${token}`,
        { password: pass }, // ✅ backend expects "password"
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        navigate("/Home"); // redirect after success
      })
      .catch((err) => {
        console.error(err.response ? err.response.data : err.message);
        alert(err.response?.data?.message || "Something went wrong");
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleReset}>
        <div>
          <label htmlFor="newpassword">New Password</label>
          <input
            type="password"
            id="newpassword"
            required
            value={pass}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="password"
            required
            value={confirmPass}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {errorMessage && (
          <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
        )}
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
}

export default Resetpass;
