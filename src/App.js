import React from "react";
import { Routes, Route } from "react-router-dom";

import HeaderLayout from "@components/Header";
import FooterLayout from "@components/Footer";
import "./App.css";
import { publicRouter } from "@const/router";
export default function App() {
  return (
    <>
      <HeaderLayout />
      <Routes>
        {publicRouter.map((el, i) => (
          <Route
            key={i}
            path={el.path}
            element={<el.component></el.component>}
          ></Route>
        ))}
      </Routes>
      <FooterLayout />
    </>
  );
}
