import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("client")) || null
  );
  const [userRole, setUserRole] = useState();
  const login = async (inputs) => {
    const res = await axios.post(
      "http://localhost:3005/clients/clientlogin",
      inputs
    );
    // console.log(res.data);
    setCurrentUser(res.data);
    setUserRole(res.data.userRole);
  };
  const logout = async (inputs) => {
    await axios.post("http://localhost:3005/clients/clientlogout");
    setCurrentUser(null);
  };
  useEffect(() => {
    localStorage.setItem("client", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
