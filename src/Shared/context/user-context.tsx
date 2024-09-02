import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../types";
import { signUp } from "../../api/users";

type ContextType = {
  user: User | null;
  signupUser: (username: string, password: string, email: string) => void;
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
    console.log(user);
  };

  return (
    <UserContext.Provider value={{ user, signupUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) throw Error("Should be inside provider");
  return context;
};
