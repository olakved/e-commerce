import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutWrapper from "./utils/WebWrapper";
import HomePage from "./pages/Homepage";

import ErrorPage from "./pages/error";
import ProductDetails from "./pages/productDetails";
import ContactPage from "./pages/contactUs";
import LandingPage from "./pages/landingPage";
import Skincare from "./pages/Homepage/categories/Skincare";
import Fragrances from "./pages/Homepage/categories/Fragrances";
import Laptops from "./pages/Homepage/categories/Laptops";
import Smartphone from "./pages/Homepage/categories/Smartphone";
import CategoryPage from "./pages/categoryPage";

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
        <Route path="/products/category/:category" element={<CategoryPage />} />

        {/* App Routes */}
        <Route path="smartphones" element={<Smartphone />}>
          <Route index element={<Smartphone />} />
          <Route path="fragrances" element={<Fragrances />} />
          <Route path="laptops" element={<Laptops />} />
          <Route path="skincare" element={<Skincare />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
