import Link from "next/link";
import Button from "../atoms/Button";
import { BsHouse } from "react-icons/bs";
import { useContext } from "react";
import VisitContext from "@/context/visitNumber";
import Auth from "@/context/auth";

const NavBar = () => {
  const isLogin = false;
  const loginStyles = "px-6 py-2";
  const { visitCounter } = useContext(VisitContext);
  const { auth } = useContext(Auth);
  return (
    <nav className="absolute flex w-full justify-between p-4">
      <Link href="/">
        <BsHouse size={50} className="text-red-800" />
      </Link>

      <h1 className="bg-black p-4 font-extrabold text-white">{visitCounter}</h1>
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
