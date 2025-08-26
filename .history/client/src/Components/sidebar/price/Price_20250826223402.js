import React from 'react'

import './Price.css'
import Input from '../../ui/Input'

function Price({handleFilterChange}) {
  return (
  <>
  <div className="sidebar-title price-title">Price</div>
  <div className='sidebar-container'>
   <Input handleFilterChange={handleFilterChange} value="0-50" title="$0-50" name="price"></Input>
   <Input handleFilterChange={handleFilterChange} value="50-100" title="$50-100" name="price"></Input>
   <Input handleFilterChange={handleFilterChange} value={100+} title="Over $150" name="price"></Input>


  </div>
  </>
  );
}
export default Price;