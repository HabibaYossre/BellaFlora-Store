import React from 'react'
import './Colors.css'
function Colors() {
  return (
    <>
   <div className="sidebar-title">Category</div>
  <div className="sidebar-container">
    <label className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span> all
    </label>
    <label className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span> test1
    </label>
    <label className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span> test2
    </label>
    <label className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span> test3
    </label>
  </div>
  )
}
export default Colors;