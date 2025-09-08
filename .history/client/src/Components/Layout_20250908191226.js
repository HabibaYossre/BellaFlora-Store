import React from 'react'
import { useLocation } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";

function Layout({children}) {
    const location =useLocation();
    const registrationRotes=["/auth/signup" , ]
  return (
    <div>
      
    </div>
  )
}


export default Layout;