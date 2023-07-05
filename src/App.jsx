import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutWrapper from "./utils/WebWrapper";
import HomePage from "./pages/Homepage";

import ErrorPage from "./pages/error";
import ProductDetails from "./pages/productDetails";
import ContactPage from "./pages/contactUs";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
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
