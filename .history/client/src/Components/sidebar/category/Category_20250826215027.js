import React from "react";
import "./Category.css";
import Input from '../../ui/Input'
function Category() {
  return <>
  <div className="sidebar-title">Category</div>
  <div className="sidebar-container">
   <Input handleFilterChange={handleFilterChange} value="all" title=""></Input>
   <Input></Input>
   <Input></Input>
  </div>
  </>;
}
export default Category;
