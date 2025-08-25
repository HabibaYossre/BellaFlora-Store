import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Componenets/Login";
import SignUp from "./Componenets/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />         
      <Route path="/App" element={<App />} />      
      <Route path="/SignUp" element={<SignUp />} />   
    
    </Routes>
  );
}

export default App;
