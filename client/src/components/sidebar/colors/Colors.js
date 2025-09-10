import React from "react";
import "./Colors.css";
import Input from "../../ui/Input";

function Colors({ handleFilterChange, selectedColor }) {
  return (
    <div className="sidebar-content">
      <div className="sidebar-title">Colors</div>
      <div className="sidebar-container">
        <Input
          handleFilterChange={handleFilterChange}
          value="Red"
          title="Red"
          name="color"
          isSelected={selectedColor === "Red"}
        ></Input>
        <Input
          handleFilterChange={handleFilterChange}
          value="Pink"
          title="Pink"
          name="color"
          isSelected={selectedColor === "Pink"}
        ></Input>
        <Input
          handleFilterChange={handleFilterChange}
          value="White"
          title="White"
          name="color"
          isSelected={selectedColor === "White"}
        ></Input>
        <Input
          handleFilterChange={handleFilterChange}
          value="Yellow"
          title="Yellow"
          name="color"
          isSelected={selectedColor === "Yellow"}
        ></Input>
        <Input
          handleFilterChange={handleFilterChange}
          value="Purble"
          title="Purble"
          name="color"
          isSelected={selectedColor === "Purble"}
        ></Input>
      </div>
    </div>
  );
}
export default Colors;
