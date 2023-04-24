import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/PRODUCTS/Products";
import Header from "./components/HEADER/Header";
import MainRouter from "./components/PRODUCTS/MainRouter";

const App = () => {
  return (
    <>
      <Header />
      <MainRouter />
    </>
  );
};

export default App;
