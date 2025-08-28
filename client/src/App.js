
import {Routes, Route } from "react-router-dom";
import Login from "./components/registration/Login";
import SignUp from "./components/registration/SignUp";
import Home from './components/home/Home';
import Search from "./components/search/Search";
import Allproducts from "./components/allProducts/Allproducts";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />}/>
    //   <Route path="/Login" element={<Login />} />         
    //   <Route path="/Home" element={<Home />} />      
    //   <Route path="/SignUp" element={<SignUp />} />   
    
    // </Routes>
  <>
<Cart></Cart>
  </>
  
  );
}

export default App;
