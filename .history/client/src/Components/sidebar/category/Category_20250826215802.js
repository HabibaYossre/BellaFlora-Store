import React from "react";
import "./Category.css";
import Input from '../../ui/Input'
function Category({handleFilterChange}) {
  return <>
  <div className="sidebar-title">Category</div>
  <div className="sidebar-container">
   <Input handleFilterChange={handleFilterChange} value="bouquet" title="Bouquet" name="category"></Input>
   <Input handleFilterChange={handleFilterChange} value="all" title="Bunch" name="category"></Input>
   <Input handleFilterChange={handleFilterChange} value="all" title="Vase Arrangement" name="category"></Input>
  </div>
  </>;
}
export default Category;
