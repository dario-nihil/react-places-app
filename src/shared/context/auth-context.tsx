import { createContext } from "react";

interface IAppContext {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<IAppContext | null>(null);
