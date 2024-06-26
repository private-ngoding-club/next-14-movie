"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { BsDribbble, BsLinkedin } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Auth } from "@/provider/auth";
import { useUserData, User } from "@/hooks/useUserData";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { setUser } = useContext(Auth);

  const router = useRouter();
  const { fetchUser } = useUserData();
  const [loggingUser, setLoggingUser] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoggingUser({
      ...loggingUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async () => {
    try {
      console.log("Attempting to fetch user:", loggingUser.username);
      const user = await fetchUser(loggingUser.username);
      console.log("User fetched:", user);
      if (user && user.password === loggingUser.password) {
        const { password, ...restUser } = user;
        localStorage.setItem("loggedUser", JSON.stringify(user));
        setUser(user);
        toast.success("Login successful!");
        router.push("/");
      } else {
        toast.error("Invalid username or password. Please try again.");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex w-full flex-row">
        <div className="relative flex flex-1 flex-col items-center justify-center px-10">
          <div className="flex max-w-md flex-1  flex-col justify-center space-y-5">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Sign in to account
              </h2>
              <p className="text-md md:text-xl"></p>
            </div>
            <div className="flex max-w-md flex-col space-y-5">
              <input
                onChange={handleOnChange}
                name="username"
                type="text"
                placeholder="Username"
                className="flex rounded-lg border-2 border-black px-3 py-2 font-medium placeholder:font-normal md:px-4 md:py-3"
              />
              <input
                onChange={handleOnChange}
                name="password"
                type="password"
                placeholder="Password"
                className="flex rounded-lg border-2 border-black px-3 py-2 font-medium placeholder:font-normal md:px-4 md:py-3"
              />
              <button
                onClick={handleOnSubmit}
                className="flex flex-none items-center justify-center rounded-lg border-2 border-black bg-black px-3 py-2 font-medium text-white md:px-4 md:py-3"
              >
                Log In
              </button>
              <div className="flex items-center justify-center space-x-2">
                <span>Not a Member?</span>
                <Link
                  href="/signup"
                  className="font-medium text-[#070eff] underline"
                >
                  Signup now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
