
import {Routes, Route } from "react-router-dom";
import Login from "./components/registration/Login";
import SignUp from "./components/registration/SignUp";
import Home from './components/home/Home';
import Search from "./components/search/Search";
import Allproducts from "./components/allProducts/Allproducts";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/auth/login" element={<Login />} />         
      <Route path="/Home" element={<Home />} />      
      <Route path="/auth/signup" element={<SignUp />} /> 
      <Route path="/S" element={<Search />} />
      <Route path="/Allproducts" element={<Allproducts />} /> 
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Wishlist" element={<Wishlist />} />

    
    
    </Routes>
//   <>
// <Home></Home>
//   </>
  
  );
}

export default App;
