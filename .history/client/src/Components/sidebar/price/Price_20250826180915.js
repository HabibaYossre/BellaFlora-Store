import React from 'react'

import './Price.css'
import Input from '../../ui/Input'

function Price() {
  return (
  <>
  <div className="sidebar-title price-title">Price</div>
  <div className='sidebar-container'>
    <label className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span> all
    </label>
     <label className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span> $50
    </label>
     <label className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span> $100
    </label>
  </div>
  </>
  );
}
export default Price;