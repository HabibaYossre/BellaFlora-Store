
import {Routes, Route } from "react-router-dom";
import Login from "./components/registration/Login";
import SignUp from "./components/registration/SignUp";
import Checkmail from "./components/registration/Checkmail";
import Home from './components/home/Home';
import Search from "./components/search/Search";
import Allproducts from "./components/allProducts/Allproducts";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import Order from "./components/Order/Order";

import Resetpass from "./components/registration/Resetpass";
import ErrorPage from "./components/ErrorPage/ErrorPage";




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
      <Route path="/Order" element={<Order />} />
       <Route path="/Reset" element={<Resetpass />} />
        <Route path="/Checkmail" element={<Checkmail />} />
                <Route path="/*" element={<ErrorPage />} />



    
    
    </Routes>
//   <>
// <Home></Home>
//   </>
  
  );
}

export default App;
