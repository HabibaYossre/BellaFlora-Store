import React from 'react'

function Input({handleFilterChange}) {
  return (
   <label className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span> test1
    </label>
  )
}
export default Input;
