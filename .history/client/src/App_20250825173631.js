import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Componenets/Login";
import SignUp from "./Componenets/SignUp";
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={Home}/>
      <Route path="/Login" element={<Login />} />         
      <Route path="/App" element={<Home />} />      
      <Route path="/SignUp" element={<SignUp />} />   
    
    </Routes>
  );
}

export default App;
