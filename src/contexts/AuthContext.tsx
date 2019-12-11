// modules
import React, { createContext, useState } from "react";

export interface AuthData {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  photoURL: string | null;
  token: string | null;
}

interface AuthMethods {
  setAuth(data: AuthData): void;
}

export const AuthContext = createContext<AuthData & AuthMethods>({
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  photoURL: null,
  token: null,
  setAuth: () => {}
});

const AuthContextProvider: React.FC = props => {
  const [auth, setAuth] = useState<AuthData>(() => {
    const authData = localStorage.getItem("auth");
    return authData ? JSON.parse(authData) : {};
  });

  const setAuthInStorage = (auth: AuthData) => {
    localStorage.setItem("auth", JSON.stringify(auth));
    setAuth(auth);
  };

  return (
    <AuthContext.Provider value={{ ...auth, setAuth: setAuthInStorage }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
