import React from 'react'
import Search from '../search/Search';
import Products from '../products/Products'
import Recommeneded from '../recommended/Recommended'
import '../allProducts/Allproducts.css'
import Sidebar from '../sidebar/Sidebar';
function Allproducts() {
  return (
    
    <>
    {/* <Search></Search>
    <Recommeneded></Recommeneded>
    <Products></Products> */}
    <div className="products-container">
      <div className="left-column">
       
      </div>
      <div className="right-column">
        <div className="top-row"><Search></Search></div>
        <div className="bottom-row">b</div>
      </div>
    </div>
    </>
  )
}

export default Allproducts;
