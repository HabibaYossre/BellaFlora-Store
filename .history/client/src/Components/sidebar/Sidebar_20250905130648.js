import React from "react";
import { FaFilter } from "react-icons/fa6";
import Category from './category/Category'
import Price from './price/Price'
import Colors from './colors/Colors'

import './sidebar.css'
function Sidebar({handleFilterChange}) {
  console.log(handleFilterChange);
  return (
    <>
      <section className="sidebar-lg-screens">
        <div className="logo-container">
            <h1><FaFilter /></h1>
        </div>
        <Category handleFilterChange={handleFilterChange}></Category>
        <Price handleFilterChange={handleFilterChange}></Price>
        <Colors handleFilterChange={handleFilterChange}></Colors>
      </section>

      <section className="sidebar-mobile-screens">
        <div className="logo-container">
            <h1><FaFilter /></h1>
        </div>
        .
      </section>
    </>
  );
}
export default Sidebar;
