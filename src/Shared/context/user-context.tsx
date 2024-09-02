import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../types";
import { Login, signUp } from "../../api/users";

type ContextType = {
  user: User | null;
  signupUser: (username: string, password: string, email: string) => void;
  LoginUser: (username: string, password: string) => void;
};

export const UserContext = createContext<ContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signupUser = async (
    username: string,
    password: string,
    email: string
  ) => {
    const user = await signUp(username, password, email);
    setUser(user);
  };

  const LoginUser = async (username: string, password: string) => {
    const user = await Login(username, password);
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, signupUser, LoginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) throw Error("Should be inside provider");
  return context;
};
