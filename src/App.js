import { BrowserRouter, Router } from "react-router-dom";
import { Route, Routes, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";

import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


import Japanese from "./Components/home/Japanese";

function App() {
  const location = useLocation();
  const pathValue = location.pathname;

  useEffect(() => {}, [pathValue]);
  console.clear();
  return (
    <div className="App">
      {pathValue === "/admin" ? "" : <Header />}
  

      <Routes>
        <Route exect path="/" element={<Home />} />
        <Route exect path="/japanese" element={<Japanese />} />
      </Routes>
      {pathValue === "/admin" ? "" : <Footer />}
    </div>
  );
}

export default App;
