import React from "react";
import "./Category.css";
import Input from "../../ui/Input";
function Category({ handleFilterChange }) {
  return (
    <div className="sidebar-content">
      <div className="sidebar-title">Ocassion</div>
      <div className="sidebar-container">
        <Input
          handleFilterChange={handleFilterChange}
          value="Wedding"
          title="Wedding"
          name="category"
        ></Input>
        <Input
          handleFilterChange={handleFilterChange}
          value="Graduation"
          title="Graduation"
          name="category"
        ></Input>
        <Input
          handleFilterChange={handleFilterChange}
          value="Thank You"
          title="Vase Arrangement"
          name="category"
        ></Input>
      </div>
    </div>
  );
}
export default Category;
