// import React from "react";
// import "./Profile.css";
// import { useState ,useEffect} from "react";
// import { FaPen } from "react-icons/fa"; // edit icon

// import Subscribe from "../Subscribe/Subscribe";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer"
// import Shipping from "../Shipping/Shipping";
// import ContactUs from "../ContactUs/ContactUs"
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// function Profile(){
//   const [gender, setGender] = useState("Female");
//   const navigate=useNavigate();
//   const updateprofile=()=>{

//   }
//   const logout=()=>{
//  axios
//       .post("http://localhost:3000/auth/logout")
//       .then((result) => {
//         //console.log(result);
//         if (result.status===200) {
//           navigate("/auth/login");
//         } 
//       })
//       .catch((err) => {
//         console.log(err);
//         alert("Something went wrong");
//       });
//   }
//     return(
// <>

//  <div className="profile-section">
//   <div className="profile-avatar">
//     <img
//       src="/images/3d-avatar-cartoon-character_113255-103130.jpg"
//       alt="Profile"
//       className="avatar-img"
//     />
//     <div className="edit-icon">
//       <FaPen size={14} color="#fff" />
//     </div>
//   </div>

//   <form className="Profile-form">
//     <label htmlFor="f-name">First Name*</label>
//     <input type="text" id="f-name" name="f-name" required />

//     <label htmlFor="l-name">Last Name*</label>
//     <input type="text" id="l-name" name="l-name" required />

//     <label htmlFor="email">Email*</label>
//     <input type="email" id="email" name="email" required />

//     <label htmlFor="phone">Phone*</label>
//     <input type="tel" id="phone" name="phone" required />

//     <label htmlFor="gender">Gender*</label>
//     <div className="dropdown-container">
//       <select
//         className="dropdown"
//         value={gender}
//         onChange={(e) => setGender(e.target.value)}
//       >
//         <option value="Female">Female</option>
//         <option value="Male">Male</option>
//       </select>
//     </div>

//     <button onClick={updateprofile}>Update Changes</button>
//   </form>

//   <button className="log-out" onClick={logout}>
//     Logout
//   </button>
// </div>

      
// <Subscribe />

// </>
//     );
// }
// export default Profile;
import React, { useState, useEffect } from "react";
import "./Profile.css";
import { FaPen } from "react-icons/fa";
import Subscribe from "../Subscribe/Subscribe";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Shipping from "../Shipping/Shipping";
import ContactUs from "../ContactUs/ContactUs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "Female",
  });

  const [message, setMessage] = useState("");

  // Fetch user profile from backend
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/profile", { withCredentials: true })
      .then((result) => {
        setUser(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Update profile
  const updateProfile = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/api/user/profile", user, {
        withCredentials: true,
      })
      .then((result) => {
          if (result.status === 200){
            alert("✅ Profile updated successfully!");
             setUser(result.data); // reflect updated values
          }

       
      })
      .catch((err) => {
        console.error(err);
       alert("❌ Error updating profile");
      });
  };

  // Logout
  const logout = () => {
    axios
      .post("http://localhost:3000/auth/logout", {}, { withCredentials: true })
      .then((result) => {
        if (result.status === 200) {
          navigate("/auth/login");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  return (
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

        <form className="Profile-form" onSubmit={updateProfile}>
          {message && <p className="profile-message">{message}</p>}

          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="gender">Gender*</label>
          <div className="dropdown-container">
            <select
              className="dropdown"
              name="gender"
              value={user.gender}
              onChange={handleChange}
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>

          <button type="submit">Update Changes</button>
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

