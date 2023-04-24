import React from "react";
import HomePage from "../PAGES/HomePage";
import { Route, Routes } from "react-router-dom";
import Products from "./Products";

const MainRouter = () => {
  const ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/products", element: <Products />, id: 2 },
  ];

  return (
    <>
      <Routes>
        {ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRouter;
