import React from "react";
import "./Category.css";

function Category() {
  return <>
  <div className="sidebar-title">Category</div>
  <div className="">
    <label className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span> all
    </label>
    <label className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span> test1
    </label>
    <label className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span> test2
    </label>
    <label className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span> test3
    </label>
  </div>
  </>;
}
export default Category;
