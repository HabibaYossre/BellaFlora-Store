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
    name: "",
    phone: "",
    gender: "Female",
  });

  const [message, setMessage] = useState("");

  // Fetch user profile from backend
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/userProfile/getById`, { withCredentials: true })
      .then((result) => {
        if (result.data && result.data.User) {
          setUser({
            name: result.data.User.Name || "",
            phone: result.data.User.Phone || "",
            email: result.data.User.Email || "",
            image: result.data.User.Image || "",
            gender: result.data.User.Gender || "Female", // only if backend sends gender
          });
        }
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
      .put(`${process.env.REACT_APP_BACKEND_URL}/userProfile/update`, user, {
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
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`)
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

          <label htmlFor="name">Full Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
{/*
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
*/}

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
<Shipping />
      <Subscribe />
    </>
  );
}

export default Profile;

