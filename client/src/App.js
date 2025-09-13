import { Routes, Route } from "react-router-dom";
import Login from "./components/registration/Login";
import SignUp from "./components/registration/SignUp";
import Home from "./components/home/Home";
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
import Payment from "./components/Payment/Payment";
import TrackOrder from "./components/TrackOrder/TrackOrder";
import Invoice from "./components/Invoice/Invoice";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import About from "./components/About/About";
import Layout from "./components/Layout";
import Ocassions from "./components/ocassions/Ocassions";
import Admin from "./components/Admin/Admin";
import KnowType from "./components/KnowType/KnowType";

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/search" element={<Search />} />
            <Route path="/product/all" element={<Allproducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/order" element={<Order />} />
            <Route path="/auth/reset-password/:token" element={<Resetpass />} />
            <Route path="/checkmail" element={<Checkmail />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/TrackOrder" element={<TrackOrder />} />
            <Route path="/payment/:orderId" element={<Payment />} />
              <Route path="/KnowType" element={<KnowType />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/invoice/:orderId" element={<Invoice />} />
            <Route path="/Invoice" element={<Invoice />} />
             <Route path="/Admin" element={<Admin />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/Ossciassions" element={<Ocassions />} />
          </Routes>
        </Layout>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
