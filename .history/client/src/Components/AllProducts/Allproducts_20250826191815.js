import React, { useState } from 'react'
import Search from '../search/Search';
import Products from '../products/Products'
import Recommeneded from '../recommended/Recommended'
import '../allProducts/Allproducts.css'
import Sidebar from '../sidebar/Sidebar';
import productsData from '../../tempDB/productsData';
function Allproducts() {

  const [selectedFilter , setSelectedFilter]=useState(null); //radio buttons filter
  const [searchQuery , setSearchQuery]=useState(""); //search bar words

  
  //update searchQuery with what the user typed
  const handleSearchInput=(e)=>{
    setSearchQuery(e.target.value); //text inside the search bar
  }

  const searchResultItems=productsData.filter(
    (productData)=>productData.name
  )



  return (
    <>
    <div className="products-container">
      <div className="left-column">
       <Sidebar></Sidebar>
      </div>
      <div className="right-column">
        <div className="top-row"><Search></Search></div>
        <div className="mid-row"><Recommeneded></Recommeneded></div>
        <div className="bottom-row"><Products></Products></div>
      </div>
    </div>
    </>
  )
}

export default Allproducts;
