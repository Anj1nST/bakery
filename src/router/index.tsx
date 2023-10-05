import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import DefaultLayout from "../layouts/DefaultLayout";

const RootConfig = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
};

export default RootConfig;
