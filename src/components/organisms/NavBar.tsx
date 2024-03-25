import Link from "next/link";
import Button from "../atoms/Button";
import { BsHouse } from "react-icons/bs";
import { useContext } from "react";
import Auth from "@/context/auth";

const NavBar = () => {
  const loginStyles = "px-6 py-2";
  const { auth } = useContext(Auth);

  return (
    <nav className="absolute z-10 flex w-full justify-between p-4">
      <Link href="/" className="flex items-center space-x-2 text-red-500">
        <BsHouse size={50} />
        <span className="font-bold">Movie</span>
      </Link>

      {auth ? (
        <>
          <Link href="">
            <Button text="Profile" customStyles={loginStyles} />
          </Link>
        </>
      ) : (
        <Link href="/login">
          <Button text="Log In" customStyles={loginStyles} />
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
