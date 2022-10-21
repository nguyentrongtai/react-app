import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "@pages/About";
import Home from "@pages/Home";
import Topics from "@pages/Topics";
import HeaderLayout from "@components/Header";
import FooterLayout from "./components/Footer";
import "./App.css";
export default function App() {
  return (
    <>
      <Router>
        <HeaderLayout />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/topics" element={<Topics />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <FooterLayout />
      </Router>
    </>
  );
}
