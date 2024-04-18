"use client";

import { createContext, useState } from "react";

export const Auth = createContext<any>(null);

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
