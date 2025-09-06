import React, { useState } from "react";
import Search from "../search/Search";
import Products from "../products/Products";
import Recommeneded from "../recommended/Recommended";
import "../allProducts/Allproducts.css";
import Sidebar from "../sidebar/Sidebar";
import productsData from "../../tempDB/productsData";
import Card from "../ui/Card";

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
  // const searchResultItems = productsData.filter(
  //   (productData) =>
  //     productData.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
  // );

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
      filteredProducts = filteredProducts.filter((productData) =>
        productData.name.toLowerCase().includes(searchWords.toLowerCase())
      );
    }

    if (selectedFilter) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, material, price, name }) => {
          if (selectedFilter === "0-50") return price <= 50;
          if (selectedFilter === "50-100") return price >= 50 && price <= 100;
          if (selectedFilter === "100+") return price > 100;

          return (
            category === selectedFilter ||
            color === selectedFilter ||
            material === selectedFilter ||
            price.toString() === selectedFilter ||
            name === selectedFilter
          );
        }
      );
    }

    return filteredProducts.map(
      ({ _id, name, description, price, images, ratings }) => (
        <Card
          key={_id}
          img={images[0]}
          title={name}
          description={description}
          price={price}
          rating={
            ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length
          }
        ></Card>
      )
    );
  }

  // -------reset filters----------
  const handleResetFilters = () => {
    setSelectedFilter(null);
    setSearchQuery("");
  };
  const result = filteringProducts(productsData, selectedFilter, searchQuery);
  return (
    <>
      <div className="products-container">
        <div className="left-column">
          <Sidebar
          key={selectedFilter}
            handleFilterChange={handleFilterChange}
            handleResetFilters={handleResetFilters}
          ></Sidebar>
        </div>
        <div className="right-column">
          <div className="top-row">
            <Search
              searchQuery={searchQuery}
              handleSearchInput={handleSearchInput}
            ></Search>
          </div>
          <div className="mid-row">
            <Recommeneded
              handleRecommendedBtns={handleRecommendedBtns}
            ></Recommeneded>
          </div>
          <div className="bottom-row">
            <Products result={result}></Products>
          </div>
        </div>
      </div>
    </>
  );
}

export default Allproducts;
