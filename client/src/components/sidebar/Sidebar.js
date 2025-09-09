import React from "react";
import { FaFilter } from "react-icons/fa6";
import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";

import "./sidebar.css";
function Sidebar({ handleFilterChange, handleResetFilters, filters }) {
  return (
    <>
      <section className="sidebar-lg-screens">
        <div className="logo-container">
          <h1>
            <FaFilter />
          </h1>
        </div>
        <Category 
          handleFilterChange={handleFilterChange}
          selectedCategory={filters.category}
        />
        <Price 
          handleFilterChange={handleFilterChange}
          selectedPrice={filters.price}
        />
        <Colors 
          handleFilterChange={handleFilterChange}
          selectedColor={filters.color}
        />
        <button onClick={handleResetFilters} className="reset-btn btns">
          Reset Filters
        </button>
      </section>

      <section className="sidebar-mobile-screens">
        <div className="logo-container">
          <h1>
            <FaFilter />
          </h1>
        </div>
        <div className="filters">
          <Category 
            handleFilterChange={handleFilterChange}
            selectedCategory={filters.category}
          />
          <Price 
            handleFilterChange={handleFilterChange}
            selectedPrice={filters.price}
          />
          <Colors 
            handleFilterChange={handleFilterChange}
            selectedColor={filters.color}
          />
        </div>
        <button onClick={handleResetFilters} className="reset-btn btns">
          Reset Filters
        </button>
      </section>
    </>
  );
}
export default Sidebar;
