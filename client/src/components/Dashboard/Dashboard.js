import React from "react";
import "./Dashboard.css";
import { FaUsers, FaLeaf, FaChartBar, FaCog, FaUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Dashboard() {
 const navigate = useNavigate();
    const handleaddflower= (e) => {

         e.preventDefault();
         navigate("/Admin")

    }
  return (
    <div className="dashboard">
   
      <main className="main-content">
        <header className="header">
          <h3 className="hh">Welcome in Admin Dashboard</h3>
          <button className="logout-btn">Logout</button>
        </header>

        {/* Stats Cards */}
        <section className="cards">
          <div className="card">
            <h3>Total Users</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>Total Flowers</h3>
            <p>45</p>
          </div>
          <div className="card">
            <h3>Uploads Today</h3>
            <p>30</p>
          </div>
          <div className="card">
            <h3>Most Popular Flower</h3>
            <p>Tulip</p>
          </div>
        </section>
        <div className="buttons">
            <button className="add-flower" onClick={handleaddflower}>Add Flower</button>
            <button className="add-flower">Remove Flower</button>
            <button className="add-flower">Update Flower</button>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
