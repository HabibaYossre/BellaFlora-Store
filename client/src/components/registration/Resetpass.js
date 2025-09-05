import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Login.css";



function Resetpass() {
     const navigate = useNavigate();
     const [pass, setPassword] = useState("");
     const [confirmPass, setConfirmPassword] = useState("");
      const { token } = useParams(); // get token from URL
    const handleReset = (e) => {
    e.preventDefault();
     {/* Habiba Reset Password Route Here!*/}
    axios
      .post("http://localhost:3000/api/auth/reset-password/:token", { pass}) 
      .then((result) => {
         if (result.status===200) {
        {/* Habiba Reset Password Route Here!*/}
 if (!pass || !confirmPass) {
      alert("Both fields are required!");
      return;
    }

    if (pass !== confirmPass) {
      alert("Passwords do not match!");
      return;
    }
    
        alert("Password has been reset!");

       navigate("/auth/login");

        }
        
      })
       .catch((err) => {
        console.log(err);
        alert("Something went wrong");
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
        <button type="submit" >Update Password</button>
        
      </form>
     
    </div>
    </div>
  );
}
export default Resetpass;