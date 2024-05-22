"use client";

import Link from "next/link";
import Button from "../atoms/Button";
import { BsHouse } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { Auth } from "@/provider/auth";
import { toast } from "react-toastify";
import { useUserData, User } from "@/hooks/useUserData";

const NavBar = () => {
  // const { user, createUser, fetchUser, modifyUser, removeUser } = useUserData();

  const loginStyles = "px-6 py-2";
  const { user, setUser } = useContext(Auth);
  const handleOnClick = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
    toast(`Logged out!`);
  };

  // useEffect(() => {
  //   const loadUser = async () => {
  //     await fetchUser("");
  //   };
  //   loadUser();
  // }, []);

  return (
    <nav className="absolute z-10 flex w-full items-center justify-between p-4">
      <Link href="/" className="flex items-center space-x-2 text-blue-500">
        <BsHouse size={50} />
        <span className="font-bold">Movies</span>
      </Link>

      {user ? (
        <>
          <h1 className="text-white">Welcome {user.username}</h1>
          <div className="space-x-3">
            <Link href="/favourite">
              <Button text="Favourite" customStyles={loginStyles} />
            </Link>
            <Link href="/profile">
              <Button text="Profile" customStyles={loginStyles} />
            </Link>
            <Button
              text="Log Out"
              onClick={handleOnClick}
              customStyles={loginStyles}
            />
          </div>
        </>
      ) : (
        <Link href="/login">
          <Button text="Log In" primary={false} customStyles={loginStyles} />
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
