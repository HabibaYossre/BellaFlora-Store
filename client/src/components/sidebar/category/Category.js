import React from "react";
import "./Category.css";
import Input from "../../ui/Input";
function Category({ handleFilterChange, selectedCategory }) {
  return (
    <div className="sidebar-content">
      <div className="sidebar-title">Category</div>
      <div className="sidebar-container">
        <Input
          handleFilterChange={handleFilterChange}
          value="Bouquet"
          title="Bouquet"
          name="category"
          isSelected={selectedCategory === "Bouquet"}
        ></Input>
        <Input
          handleFilterChange={handleFilterChange}
          value="Bunch"
          title="Bunch"
          name="category"
          isSelected={selectedCategory === "Bunch"}
        ></Input>
        <Input
          handleFilterChange={handleFilterChange}
          value="Vase Arrangement"
          title="Vase Arrangement"
          name="category"
          isSelected={selectedCategory === "Vase Arrangement"}
        ></Input>
      </div>
    </div>
  );
}
export default Category;
