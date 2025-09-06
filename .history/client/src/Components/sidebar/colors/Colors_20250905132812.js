import React from "react";
import "./Colors.css";
import Input from "../../ui/Input";

function Colors({ handleFilterChange }) {
  return (
    <div className="sidebar-content">
      <div className="sidebar-title">Colors</div>
      <div className="sidebar-container">
        <Input
          handleFilterChange={handleFilterChange}
          value="Red"
          title="Red"
          name="color"
        ></Input>
        <Input
          handleFilterChange={handleFilterChange}
          value="Pink"
          title="Pink"
          name="color"
        ></Input>
        <Input
          handleFilterChange={handleFilterChange}
          value="White"
          title="White"
          name="color"
        ></Input>
        <Input
          handleFilterChange={handleFilterChange}
          value="Yellow"
          title="Yellow"
          name="color"
        ></Input>
        <Input
          handleFilterChange={handleFilterChange}
          value="Purble"
          title="Purble"
          name="color"
        ></Input>
      </div>
    </div>
  );
}
export default Colors;
