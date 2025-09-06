import React from "react";
import "./Category.css";
import Input from "../../ui/Input";
function Category({ handleFilterChange }) {
  return (
    <div className="sidebar-content">
      <div className="sidebar-title">Category</div>
      <div className="sidebar-container">
        <Input
          handleFilterChange={handleFilterChange}
          value="Wedding"
          title="Graduation"
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
