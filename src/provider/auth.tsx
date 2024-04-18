import { useState } from "react";
import Auth from "@/context/auth";

export interface UserProps {
  id: string;
  username: string;
  password: string;
  favourite: string[];
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<UserProps>({} as UserProps);

  return <Auth.Provider value={{ user, setUser }}>{children}</Auth.Provider>;
};

export default AuthProvider;
