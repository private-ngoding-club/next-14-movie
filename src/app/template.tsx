import Footer from "@/components/organisms/Footer";
import NavBar from "@/components/organisms/NavBar";
import React from "react";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />

      <ToastContainer />
    </>
  );
};

export default Layout;
