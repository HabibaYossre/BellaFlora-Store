import React from 'react'

function Input({handleFilterChange , value , title , name }) {
  return (
   <label className="sidebar-label-container">
      <input onChange={handleFilterChange} type="radio" value={value} name={name} />
      <span className="checkmark"></span> 
      {title}
    </label>
  )
}
export default Input;
