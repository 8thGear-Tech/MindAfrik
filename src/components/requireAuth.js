import { useLocation, Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import useAuth from "./hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  const accessToken = Cookies.get("access_token");
  console.log("Auth:", auth);
  console.log("Allowed Roles:", allowedRoles);
  console.log("Access Token:", accessToken);
  return accessToken && allowedRoles.includes(auth?.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/signInPage" state={{ from: location }} replace />
  );
};

//   return auth?.role && allowedRoles.includes(auth?.role) ? (
//     <Outlet />
//   ) : auth?.email ? (
//     <Navigate to="/unauthorized" state={{ from: location }} replace />
//   ) : (
//     <Navigate to="/signInPage" state={{ from: location }} replace />
//   );
// };

export default RequireAuth;
