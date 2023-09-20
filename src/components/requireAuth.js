// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "./hooks/useAuth";

// const RequireAuth = ({ allowedRoles }) => {
//   const { auth } = useAuth();
//   const location = useLocation();

//   if (
//     (auth?.roles.includes(ROLES.Counsellor) &&
//       allowedRoles.includes(ROLES.Counsellor)) ||
//     (auth?.roles.includes(ROLES.Admin) && allowedRoles.includes(ROLES.Admin)) ||
//     (auth?.roles.includes(ROLES.Counsellee) &&
//       allowedRoles.includes(ROLES.Counsellee))
//   ) {
//     return <Outlet />;
//   }

//   return auth?.user ? (
//     <Navigate to="/unauthorized" state={{ from: location }} replace />
//   ) : (
//     <Navigate to="/signInPage" state={{ from: location }} replace />
//   );
// };

// export default RequireAuth;

import { useLocation, Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import useAuth from "./hooks/useAuth";
// const RequireAuth = ({ allowedRoles }) => {
//   const { auth } = useAuth();
//   const location = useLocation();

//   if (
//     auth &&
//     auth.role &&
//     auth.access_token &&
//     allowedRoles.includes(auth.role)
//   ) {
//     return <Outlet />;
//   } else {
//     return auth?.email ? (
//       <Navigate to="/unauthorized" state={{ from: location }} replace />
//     ) : (
//       <Navigate to="/signInPage" state={{ from: location }} replace />
//     );
//   }
// };

// export default RequireAuth;
const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  const accessToken = Cookies.get("access_token");
  console.log("Access Token:", accessToken);
  console.log("Auth:", auth);
  console.log("Allowed Roles:", allowedRoles);
  // Add a check for the `access_token` cookie
  // const accessToken = Cookies.get("access_token");
  if (accessToken && new Date(accessToken.expires) > new Date()) {
    // If the access token is still valid, persist it
    Cookies.set("access_token", accessToken, { expires: 1 }); // Adjust the expiration time as needed
    // Then check the role
    return auth?.role && allowedRoles.includes(auth?.role) ? (
      <Outlet />
    ) : auth?.email ? (
      <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
      <Navigate to="/signInPage" state={{ from: location }} replace />
    );
  } else {
    // If the access token is not valid, redirect to the sign-in page
    return <Navigate to="/signInPage" state={{ from: location }} replace />;
  }
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
