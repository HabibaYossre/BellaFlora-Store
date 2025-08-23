import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./Componenets/App";
import Login from "./Componenets/Login";
import SignUp from "./Componenets/SignUp";
import "./index.css";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>  
);




