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
import Profile from "./components/Profile/Profile";


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
import Payment from "./components/Payment/Payment";

import TrackOrder from "./components/TrackOrder/TrackOrder";
import Invoice from "./components/Invoice/Invoice";






function App() {
  return (
    <>
  
    <Routes>
      { <Route path="/" element={<Home />}/> }
      <Route path="/auth/login" element={<Login />} />         
      <Route path="/Home" element={<Home />} />      
      <Route path="/auth/signup" element={<SignUp />} /> 
      {/*<Route path="/S" element={<Search />} />*/}
      <Route path="/product/all" element={<Allproducts />} /> 
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/order" element={<Order />} />
      <Route path="/auth/reset-password/:token" element={<Resetpass />} />  {/* Habiba Reset Password Route Here!*/}
      <Route path="/Checkmail" element={<Checkmail />} />
         <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/TrackOrder" element={<TrackOrder />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/Invoice" element={<Invoice />} />
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/Profile" element={<Profile />} />
   


    
    </Routes>
    {/* home ordering: */}
    {/* <Ocassions></Ocassions>
    <AboutUs></AboutUs>
    <Marquee></Marquee>
    <FollowUs></FollowUs>
    <Shipping></Shipping>
    <Subscribe></Subscribe>
    <Footer></Footer> */}

  </>
);
{/* <>
<Header></Header>
<Main></Main>
</> */}
//   </>
  
}

export default App;
