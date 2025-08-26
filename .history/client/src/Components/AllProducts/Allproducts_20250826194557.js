import React, { useState } from "react";
import Search from "../search/Search";
import Products from "../products/Products";
import Recommeneded from "../recommended/Recommended";
import "../allProducts/Allproducts.css";
import Sidebar from "../sidebar/Sidebar";
import productsData from "../../tempDB/productsData";
function Allproducts() {
  const [searchQuery, setSearchQuery] = useState(""); //search bar words
  const [selectedFilter, setSelectedFilter] = useState(null); //radio buttons filter

  // ----------search----------
  //update searchQuery with what the user typed
  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value); //text inside the search bar
  };

  // Keep this product if its title contains the search word (ignoring uppercase/lowercase). Otherwise, remove it.
  //filter products list bu checking if the product name contains what the user writes in search bar
  const searchResultItems = productsData.filter(
    (productData) =>
      productData.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
  );

  //-----------Radio buttons---------
  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  //---------Recommended buttons---------
  const handleRecommendedBtns = (e) => {
    setSelectedFilter(e.target.value);
  };

  // ----------filter function-------
  function filteringProducts(allProducts, selectedFilter, searchWords) {
    let filteredProducts = allProducts; //initilly are products valid

    if (searchWords) {
      filteredProducts = searchResultItems;
    }
    if (selectedFilter) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, material, price, title }) =>
          category === selectedFilter 
        || color === selectedFilter
        || material===selectedFilter || price===selectedFilter || title===selectedFilter
      );
    }

    return filteredProducts.map
  }

  return (
    <>
      <div className="products-container">
        <div className="left-column">
          <Sidebar></Sidebar>
        </div>
        <div className="right-column">
          <div className="top-row">
            <Search></Search>
          </div>
          <div className="mid-row">
            <Recommeneded></Recommeneded>
          </div>
          <div className="bottom-row">
            <Products></Products>
          </div>
        </div>
      </div>
    </>
  );
}

export default Allproducts;
