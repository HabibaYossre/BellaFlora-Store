import React from "react";
import { FaFilter } from "react-icons/fa6";
import Category from './category/Category'
import Price from './price/Price'
import Colors from './colors/Colors'

import './sidebar.css'
function Sidebar({handleFilterChange}) {
  console.log();
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
            <h1><FaFilter /></h1>
        </div>
        <Category></Category>
        <Price></Price>
        <Colors></Colors>
      </section>
    </>
  );
}
export default Sidebar;
