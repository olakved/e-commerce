import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutWrapper from "./utils/WebWrapper";
import HomePage from "./pages/Homepage";

import ErrorPage from "./pages/error";
import ProductDetails from "./pages/productDetails";
import ContactPage from "./pages/contactUs";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/index"
          element={
            <LayoutWrapper>
              <HomePage />
            </LayoutWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <LayoutWrapper>
              <ContactPage />
            </LayoutWrapper>
          }
        />

        <Route path="*" element={<ErrorPage />} />

        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
