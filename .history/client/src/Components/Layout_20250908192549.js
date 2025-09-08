import React from 'react'
import { useLocation } from "react-router-dom";
import Header from './Header/Header'
import Footer from "./Footer/Footer"

function Layout({children}) {
    const location =useLocation();
    const registrationRoutes=["/auth/signup" , "/auth/login"];
    const hide =registrationRoutes.includes(location.pathname);
  return (
    <>
     {!hide && <Header></Header>} 
     <main>{children}</main>
     {!hide && <Footer></Footer>}
    </>
  )
}


export default Layout;