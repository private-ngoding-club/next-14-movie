import Footer from "@/components/organisms/Footer";
import NavBar from "@/components/organisms/NavBar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
