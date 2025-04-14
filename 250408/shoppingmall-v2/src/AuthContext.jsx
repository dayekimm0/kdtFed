import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <AuthContext.Provider value={{ authenticate, setAuthenticate }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
