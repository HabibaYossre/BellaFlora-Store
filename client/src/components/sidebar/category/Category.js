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
          value="Graduation"
          title="Graduation"
          name="category"
          isSelected={selectedCategory === "Graduation"}
        ></Input>
        <Input
          handleFilterChange={handleFilterChange}
          value="wedding"
          title="wedding"
          name="category"
          isSelected={selectedCategory === "wedding"}
        ></Input>
        <Input
          handleFilterChange={handleFilterChange}
          value="apology"
          title="apology"
          name="category"
          isSelected={selectedCategory === "apology"}
        ></Input>
         <Input
          handleFilterChange={handleFilterChange}
          value="thanks"
          title="thanks"
          name="category"
          isSelected={selectedCategory === "thanks"}
        ></Input>
         <Input
          handleFilterChange={handleFilterChange}
          value="engagement"
          title="engagement"
          name="category"
          isSelected={selectedCategory === "engagement"}
        ></Input>
      </div>
    </div>
  );
}
export default Category;
