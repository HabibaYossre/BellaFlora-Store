import React from "react";
import { FaFilter } from "react-icons/fa6";
import Category from './category/Category'
import Category from './category/Category'import Category from './category/Category'

import './sidebar.css'
function Sidebar() {
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
