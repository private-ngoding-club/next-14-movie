import Link from "next/link";
import Button from "../atoms/Button";
import { BsHouse } from "react-icons/bs";
import { useContext } from "react";
import Auth from "@/context/auth";

const NavBar = () => {
  const loginStyles = "px-6 py-2";
  const { user, setUser } = useContext(Auth);
  const handleOnClick = () => {
    setUser(null);
  };

  return (
    <nav className="absolute z-10 flex w-full items-center justify-between p-4">
      <Link href="/" className="flex items-center space-x-2 text-red-500">
        <BsHouse size={50} />
        <span className="font-bold">Movie</span>
      </Link>

      {user ? (
        <>
          <h1 className="text-white">Welcome {user.username}</h1>
          <div className="space-x-3">
            <Link href="">
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
          <Button text="Log In" customStyles={loginStyles} />
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
