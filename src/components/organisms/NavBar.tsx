import Link from "next/link";
import Button from "../atoms/Button";
import { BsHouseExclamation } from "react-icons/bs";

const NavBar = () => {
  const isLogin = false;
  const loginStyles = "px-6 py-2";

  return (
    <nav className="absolute flex w-full justify-between p-4">
      <BsHouseExclamation size={50} className="text-red-800" />
      {isLogin ? (
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
