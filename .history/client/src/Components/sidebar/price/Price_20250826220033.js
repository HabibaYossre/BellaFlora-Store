import React from 'react'

import './Price.css'
import Input from '../../ui/Input'

function Price({handleFilterChange}) {
  return (
  <>
  <div className="sidebar-title price-title">Price</div>
  <div className='sidebar-container'>
       <Input handleFilterChange={handleFilterChange} value="bouquet" title="Bouquet" name="category"></Input>


  </div>
  </>
  );
}
export default Price;