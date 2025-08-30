import React from 'react'

import './Price.css'
import Input from '../../ui/Input'

function Price({handleFilterChange}) {
  return (
  <>
  <div className="sidebar-title price-title">Price</div>
  <div className='sidebar-container'>
   <Input handleFilterChange={handleFilterChange} value={50} title="$0-50" name="category"></Input>


  </div>
  </>
  );
}
export default Price;