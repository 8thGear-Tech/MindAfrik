import { useLocation, Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import useAuth from "./hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  const storedAccessToken = Cookies.get("access_token");

  console.log("Auth:", auth);
  console.log("Allowed Roles:", allowedRoles);
  console.log("Access Token:", storedAccessToken);

  if (!auth?.role && !storedAccessToken) {
    // Neither role nor access token exists, redirect to sign-in
    return <Navigate to="/signInPage" state={{ from: location }} replace />;
  }

  // if (!auth?.role && storedAccessToken) {
  //   // Role doesn't exist but access token exists
  //   // Check if the stored access token is associated with the user's role
  //   const { data } = response; // Destructure the data from the response
  //   if (allowedRoles.includes(data.data.role)) {
  //     return <Outlet />;
  //   } else {
  //     return <Navigate to="/" state={{ from: location }} replace />;
  //   }
  // }

  // if (!auth?.role && storedAccessToken) {
  //   // Role doesn't exist but access token exists
  //   // You should verify the token server-side to ensure its validity
  //   // Assuming you've verified the token and obtained the user's role
  //   // const userRole = role; // Replace this with the actual role from the token

  //   if (allowedRoles.includes(role)) {
  //     return <Outlet />;
  //   } else {
  //     return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  //   }
  // }

  // if (!auth?.role && storedAccessToken) {
  //   // Role doesn't exist but access token exists, consider user authenticated
  //   // Verify the token server-side and pass the user role in the response
  //   // Assuming you've received the user role in the response
  //   // const userRole = response.data.role;

  //   if (!allowedRoles.includes(role)) {
  //     return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  //   }

  //   return <Outlet />;
  // }
  if (!auth?.role && storedAccessToken) {
    // Role doesn't exist but access token exists, consider user authenticated
    if (allowedRoles.includes(auth?.role)) {
      return <Outlet />;
    } else {
      return <Navigate to="/unauthorized" state={{ from: location }} replace />;
    }
  }

  // if (!auth?.role && storedAccessToken) {
  //   // Role doesn't exist but access token exists, consider user authenticated
  //   // You might want to decode and verify the token server-side here
  //   return <Outlet />;
  // }

  if (auth?.role && allowedRoles.includes(auth?.role)) {
    // User has the required role
    return <Outlet />;
  }

  // User has a role, but it's not in the allowedRoles
  return <Navigate to="/unauthorized" state={{ from: location }} replace />;
};
//   const accessToken = Cookies.get("access_token");
//   console.log("Auth:", auth);
//   console.log("Allowed Roles:", allowedRoles);
//   console.log("Access Token:", accessToken);
//   return accessToken && allowedRoles.includes(auth?.role) ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/signInPage" state={{ from: location }} replace />
//   );
// };

//   return auth?.role && allowedRoles.includes(auth?.role) ? (
//     <Outlet />
//   ) : auth?.email ? (
//     <Navigate to="/unauthorized" state={{ from: location }} replace />
//   ) : (
//     <Navigate to="/signInPage" state={{ from: location }} replace />
//   );
// };

export default RequireAuth;
