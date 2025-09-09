import React from "react";

function Input({ handleFilterChange, value, title, name, isSelected }) {
  return (
    <label className={`sidebar-label-container ${isSelected ? 'selected' : ''}`}>
      <input
        onChange={handleFilterChange}
        type="radio"
        value={value}
        name={name}
        checked={isSelected}
      />
      <span className="checkmark"></span>
      <span className="label-text">{title}</span>
    </label>
  );
}
export default Input;
