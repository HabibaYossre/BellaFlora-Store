import React from "react";
// import {FiHeart} from 'react-icons/fi'
// import {AipOutlineShoppingCart , AiOutlineUserAdd} from "react-icons/ai"
import { FaSearch } from "react-icons/fa";
import "./Search.css";
function Search({searchQuery}) {
  return (
    <nav className="search-nav">
    <div className="search-container">
      <input type="text" value={searchQuery} placeholder="Find your perfect bouquet.." />
    <i><FaSearch /></i>
    </div>
  
  </nav>
  );
}
export default Search;
