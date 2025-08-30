import React from "react";
import "./Colors.css";
import Input from '../../ui/Input'

function Colors({handleFilterChange}) {
  return (
    <>
      <div className="sidebar-title">Colors</div>
      <div className="sidebar-container">
        <Input handleFilterChange={handleFilterChange} value="red" title="Red" name="color"></Input>
        <Input handleFilterChange={handleFilterChange} value="pink" title="Pink" name="color"></Input>
        <Input handleFilterChange={handleFilterChange} value="white" title="White" name="color"></Input>
        <Input handleFilterChange={handleFilterChange} value="yellow" title="Yellow" name="color"></Input>
        <Input handleFilterChange={handleFilterChange} value="red" title="Red" name="color"></Input>


        
      </div>
    </>
  );
}
export default Colors;
