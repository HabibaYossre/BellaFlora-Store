import React from "react";
import "./Category.css";
import Input from "../../ui/Input";
function Category({ handleFilterChange }) {
  return (
    <div className="side">
      <div className="sidebar-title">Category</div>
      <div className="sidebar-container">
        <Input
          handleFilterChange={handleFilterChange}
          value="Bouquet"
          title="Bouquet"
          name="category"
        ></Input>
        <Input
          handleFilterChange={handleFilterChange}
          value="Bunch"
          title="Bunch"
          name="category"
        ></Input>
        <Input
          handleFilterChange={handleFilterChange}
          value="Vase Arrangement"
          title="Vase Arrangement"
          name="category"
        ></Input>
      </div>
    </div>
  );
}
export default Category;
