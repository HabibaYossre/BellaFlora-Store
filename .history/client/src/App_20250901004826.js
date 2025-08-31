import { Routes, Route } from "react-router-dom";
import Login from "./components/registration/Login";
import SignUp from "./components/registration/SignUp";
import Home from "./components/home/Home";
import Header from './components/Header/Header'
import Checkmail from "./components/registration/Checkmail";
import Search from "./components/search/Search";
import Allproducts from "./components/allProducts/Allproducts";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import Order from "./components/Order/Order";

import Resetpass from "./components/registration/Resetpass";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ContactUs from "./components/ContactUs/ContactUs";

import Main from "./components/main/Main"
import Footer from "./components/Footer/Footer";
import Ocassions from "./components/occasions/Ocassions";
import AboutUs from "./components/aboutUs/AboutUs";
import Marquee from "./components/Marquee/Marquee";
import FollowUs from "./components/followUs/FollowUs";
import Shipping from "./components/Shipping/Shipping";
import Subscribe from "./components/Subscribe/Subscribe";
=======
import TrackOrder from "./components/TrackOrder/TrackOrder";



>>>>>>> 295c9d3b45a5ad6eb7e0c5079a83a719546dea0b



function App() {
  return (
    <>
    {/* <Header></Header> */}
    <Routes>
      <Route path="/" element={<Main />}/>
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
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/TrackOrder" element={<TrackOrder />} />

    
    </Routes>
    {/* home ordering: */}
    <Ocassions></Ocassions>
    <AboutUs></AboutUs>
    <Marquee></Marquee>
    <FollowUs></FollowUs>
    <Shipping></Shipping>
    <Subscribe></Subscribe>
    <Footer></Footer>
  </>
);
{/* <>
<Header></Header>
<Main></Main>
</> */}
//   </>
  
}

export default App;
