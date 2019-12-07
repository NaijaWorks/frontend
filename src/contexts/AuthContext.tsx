// modules
import React, { createContext, useState } from "react";

interface AuthData {
  userId: string | null;
  firstName: string | null;
  lastName: string | null;
  photoURL: string | null;
}

interface AuthMethods {
  setAuth(data: AuthData): void;
}

export const AuthContext = createContext<AuthData & AuthMethods>({
  userId: null,
  firstName: null,
  lastName: null,
  photoURL: null,
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
