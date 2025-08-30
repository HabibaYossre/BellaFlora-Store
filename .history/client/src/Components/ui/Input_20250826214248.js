import React from 'react'

function Input({handleFilterChange , value , title , name }) {
  return (
   <label className="sidebar-label-container">
      <input onCh type="radio" name="test" />
      <span className="checkmark"></span> test1
    </label>
  )
}
export default Input;
