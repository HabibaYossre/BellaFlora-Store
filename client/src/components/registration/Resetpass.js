import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";



function Resetpass() {
     const navigate = useNavigate();
      const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/resetpassword", { pass})
      .then((result) => {
         if (result.status===200) {
        alert("Reset your Password")
        alert("Password has been reset!");

       navigate("/auth/login");

        }
         else {
      alert(" result status failed")
         
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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newpassword">New Password</label>
          <input type="password" id="newpassword" name="newpassword" onChange={(e) => setPassword(e.target.value)}  />
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}  />
        </div>
        <button type="submit" >Update Password</button>
        
      </form>
     
    </div>
    </div>
  );
}
export default Resetpass;