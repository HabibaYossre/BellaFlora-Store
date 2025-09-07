import React from "react";
import "./Profile.css";
import { useState } from "react";
import { FaPen } from "react-icons/fa"; // edit icon

import Subscribe from "../Subscribe/Subscribe";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import Shipping from "../Shipping/Shipping";
import ContactUs from "../ContactUs/ContactUs"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Profile(){
  const [gender, setGender] = useState("Female");
  const navigate=useNavigate();
  const updateprofile=()=>{

  }
  const logout=()=>{
 axios
      .post("http://localhost:3000/auth/logout")
      .then((result) => {
        //console.log(result);
        if (result.status===200) {
          navigate("/auth/login");
        } 
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  }
    return(
<>

 <div className="profile-section">
  <div className="profile-avatar">
    <img
      src="/images/3d-avatar-cartoon-character_113255-103130.jpg"
      alt="Profile"
      className="avatar-img"
    />
    <div className="edit-icon">
      <FaPen size={14} color="#fff" />
    </div>
  </div>

  <form className="Profile-form">
    <label htmlFor="f-name">First Name*</label>
    <input type="text" id="f-name" name="f-name" required />

    <label htmlFor="l-name">Last Name*</label>
    <input type="text" id="l-name" name="l-name" required />

    <label htmlFor="email">Email*</label>
    <input type="email" id="email" name="email" required />

    <label htmlFor="phone">Phone*</label>
    <input type="tel" id="phone" name="phone" required />

    <label htmlFor="gender">Gender*</label>
    <div className="dropdown-container">
      <select
        className="dropdown"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>
    </div>

    <button onClick={updateprofile}>Update Changes</button>
  </form>

  <button className="log-out" onClick={logout}>
    Logout
  </button>
</div>

      
<Subscribe />

</>
    );
}
export default Profile;

