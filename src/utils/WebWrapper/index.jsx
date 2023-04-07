import React from "react";
import Footer from "../../components/footer";
import HeaderN from "../../components/headerN";

function LayoutWrapper({ children }) {
  return (
    <>
      <HeaderN />
      {children}
      <Footer />
    </>
  );
}

export default LayoutWrapper;
