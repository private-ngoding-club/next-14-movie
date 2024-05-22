"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { useUserData } from "@/hooks/useUserData";

const SignupPage = () => {
  const router = useRouter();
  const { createUser } = useUserData();
  const [signingUser, setSigningUser] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSigningUser({
      ...signingUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async () => {
    const userId = Date.now(); // Use current timestamp as a simple unique ID
    const newUser = {
      id: userId,
      username: signingUser.username,
      password: signingUser.password,
      favourite: [],
    };

    try {
      console.log("Signing up user:", newUser);
      await createUser(newUser);
      toast.success("Signup successful!");
      router.push("/login");
    } catch (error) {
      toast.error("Signup failed. Please try again.");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex w-full flex-row">
        <div className="relative flex flex-1 flex-col items-center justify-center px-10">
          <div className="flex w-full items-center justify-between py-4"></div>
          <div className="flex max-w-md flex-1 flex-col justify-center space-y-5">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Create an account
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
                Sign Up
              </button>
              <div className="flex items-center justify-center space-x-2">
                <span>Already have an account? </span>
                <Link
                  href="/login"
                  className="font-medium text-[#070eff] underline"
                >
                  Login now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
