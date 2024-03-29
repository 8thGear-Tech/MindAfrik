import { useEffect, createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem("persist")) || false
  );
  //new
  // const [auth, setAuth] = useState({
  //   user: null,
  //   role: null,
  // });
  // useEffect(() => {
  //   localStorage.setItem("persist", JSON.stringify(persist));
  // }, [persist]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
    // <AuthContext.Provider value={{ auth, setAuth }}>
    //   {children}
    // </AuthContext.Provider>
  );
};
// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(
//     JSON.parse(localStorage.getItem("client")) || null
//   );
//   const [userRole, setUserRole] = useState();
//   const login = async (inputs) => {
//     const res = await axios.post(
//       "https://mindafrikserver.onrender.com/user/login",
//       inputs
//     );
//     // console.log(res.data);
//     setCurrentUser(res.data);
//     setUserRole(res.data.userRole);
//   };
//   const logout = async (inputs) => {
//     await axios.post("http://localhost:3005/clients/clientlogout");
//     setCurrentUser(null);
//   };
//   useEffect(() => {
//     localStorage.setItem("client", JSON.stringify(currentUser));
//   }, [currentUser]);

//   return (
//     <AuthContext.Provider value={{ currentUser, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
