import React from "react";
import "./Colors.css";
import Input from '../../ui/Input'

function Colors({handleFilterChange}) {
  return (
    <>
      <div className="sidebar-title">Colors</div>
      <div className="sidebar-container">
        <Input handleFilterChange={handleFilterChange} value="red" title="Red" name="category"></Input>


        
      </div>
    </>
  );
}
export default Colors;
