
import React from "react";
import ReactDOM from "react-dom/client";
import {Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Login" element={<Login />} />         
      <Route path="/Home" element={<Home />} />      
      <Route path="/SignUp" element={<SignUp />} />   
    
    </Routes>
  );
}

export default App;
