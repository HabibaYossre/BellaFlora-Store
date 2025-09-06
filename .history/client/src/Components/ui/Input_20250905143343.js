import React from 'react'

function Input({handleFilterChange , value , title , name }) {
  return (
   <label className="sidebar-label-container">
      <input onChange={handleFilterChange} type="radio" value={value} name={name} />
      <span className="checkmark"></span> 
      <span className='lebel-text'></span>
    </label>
  )
}
export default Input;
