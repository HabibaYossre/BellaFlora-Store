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
      <section className="sidebar">
        <div className="logo-container">
            <h1><FaFilter /></h1>
        </div>
        <Category handleFilterChange></Category>
        <Price handleFilterChange></Price>
        <Colors handleFilterChange></Colors>
      </section>
    </>
  );
}
export default Sidebar;
