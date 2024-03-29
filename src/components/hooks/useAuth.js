import { useContext, useDebugValue } from "react";
import { AuthContext } from "../context/authContext";

const useAuth = () => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (auth) => (auth?.user ? "Logged In" : "Logged Out"));
  return useContext(AuthContext);
  return useContext(AuthContext);
};

export default useAuth;
