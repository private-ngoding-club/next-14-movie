"use client";
import Footer from "@/components/organisms/Footer";
import NavBar from "@/components/organisms/NavBar";
import { Auth } from "@/provider/auth";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Audio, ColorRing, FallingLines, Vortex } from "react-loader-spinner";

// TODO:
// 1. Create loading state
// 2. Create condition if loading, shows loader
// 3. Fetch user on first load
// 4. show loader instead of real page when loading

const Layout = ({ children }) => {
  const [isLoading, setisLoading] = useState<boolean>(true);
  const { user, setUser } = useContext(Auth);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await localStorage.getItem("loggedUser");
        if (response) {
          const data = JSON.parse(response);
          setUser(data);
        }
      } catch {
        return;
      } finally {
        setisLoading(false);
      }
    };
    fetchUser();
  }, [setUser]);

  if (isLoading) {
    return (
      <ColorRing
        visible={true}
        height="20"
        width="20"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="container mx-auto items-center h-screen"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    );
  }

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
