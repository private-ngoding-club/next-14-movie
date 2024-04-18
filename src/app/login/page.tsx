"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { BsDribbble, BsLinkedin } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Auth } from "@/provider/auth";

// TODO : Use firebase auth
const LoginPage = () => {
  const router = useRouter();
  const { setUser } = useContext(Auth);
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

  const handleOnClick = () => {
    console.log({
      id: "1",
      username: signingUser.username,
      password: signingUser.password,
      favourite: [],
    });

    setUser({
      id: "1",
      username: signingUser.username,
      password: signingUser.password,
      favourite: [],
    });

    router.push("/");
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex w-full flex-row">
        <div className="hidden flex-col justify-between bg-[#ffe85c] lg:flex lg:max-w-sm lg:p-8 xl:max-w-lg xl:p-12">
          <div className="flex items-center justify-start space-x-3">
            <span className="h-8 w-8 rounded-full bg-black" />
            <Link href="/" className="text-xl font-medium">
              Brand
            </Link>
          </div>
          <div className="space-y-5">
            <h1 className="font-extrabold lg:text-3xl xl:text-5xl xl:leading-snug">
              Enter your account and discover new experiences
            </h1>
            <p className="text-lg">You do not have an account?</p>
            <button className="inline-block flex-none rounded-lg border-2 border-black bg-black px-4 py-3 font-medium text-white">
              Create account here
            </button>
          </div>
          <p className="font-medium">© {new Date().getFullYear()} Company</p>
        </div>

        <div className="relative flex flex-1 flex-col items-center justify-center px-10">
          <div className="flex w-full items-center justify-between py-4 lg:hidden">
            <div className="flex items-center justify-start space-x-3">
              <span className="h-6 w-6 rounded-full bg-black" />
              <Link href="/" className="text-lg font-medium">
                Brand
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span>Not a member? </span>
              <a href="#" className="font-medium text-[#070eff] underline">
                Sign up now
              </a>
            </div>
          </div>
          <div className="flex max-w-md flex-1  flex-col justify-center space-y-5">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">
                Sign in to account
              </h2>
              <p className="text-md md:text-xl">
                Sign up or log in to place the order,no password require!
              </p>
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
                onClick={handleOnClick}
                className="flex flex-none items-center justify-center rounded-lg border-2 border-black bg-black px-3 py-2 font-medium text-white md:px-4 md:py-3"
              >
                Confirm with email
              </button>
              {/* <div className="flex items-center justify-center">
                <span className="w-full border border-black" />
                <span className="px-4">Or</span>
                <span className="w-full border border-black" />
              </div>
              <button className="relative flex flex-none items-center justify-center rounded-lg border-2 border-black px-3 py-2 font-medium md:px-4 md:py-3">
                <span className="absolute left-4">
                  <BsGoogle size={24} />
                </span>
                <span>Sign in with Google</span>
              </button> */}
            </div>
          </div>

          <div className="m-auto mb-16 flex flex-col justify-center text-center text-lg dark:text-slate-200 ">
            <p className="mb-1 font-bold">
              Built by{" "}
              <a href="#" className="underline dark:text-white">
                Frank Esteban
              </a>
            </p>
            <p>Contact me on the different platforms and social networks</p>
            <div className="mt-4 flex flex-wrap items-center justify-center space-x-2">
              <a
                href="https://www.linkedin.com/in/frankuxui/"
                className="flex h-12 w-12 flex-none items-center justify-center rounded-full transition-all hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                <BsLinkedin size={24} />
              </a>
              <a
                href="https://www.figma.com/@frankuxui"
                className="flex h-12 w-12 flex-none items-center justify-center rounded-full transition-all hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                <FaFigma size={24} />
              </a>
              <a
                href="https://dribbble.com/frankuxui"
                className="flex h-12 w-12 flex-none items-center justify-center rounded-full transition-all hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                <BsDribbble size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
