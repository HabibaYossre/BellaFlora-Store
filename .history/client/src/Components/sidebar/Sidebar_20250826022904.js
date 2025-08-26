import React from "react";
import { FaFilter } from "react-icons/fa6";
import './sidebar.css'
function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
            <h1><FaFilter /></h1>
        </div>
        
      </section>
    </>
  );
}
export default Sidebar;
