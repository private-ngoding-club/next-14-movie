"use client";

import { createContext, useState } from "react";

export const Auth = createContext<any>(null);

export interface UserProps {
  id: string;
  username: string;
  favourite: string[];
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);

  return <Auth.Provider value={{ user, setUser }}>{children}</Auth.Provider>;
};

export default AuthProvider;
