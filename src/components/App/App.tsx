import React from "react";
import Login from "../login";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Registration from "../Registration";
const  App =() =>{
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
  );
}
export default App
