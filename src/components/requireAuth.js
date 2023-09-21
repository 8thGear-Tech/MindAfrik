import { useLocation, Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import useAuth from "./hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  const storedAccessToken = Cookies.get("access_token");

  if (!auth?.role && !storedAccessToken) {
    // Neither role nor access token exists, redirect to sign-in
    return <Navigate to="/signInPage" state={{ from: location }} replace />;
  }

  if (!auth?.role && storedAccessToken) {
    // Role doesn't exist but access token exists, verify the token server-side
    try {
      // Send a request to your server to verify the access token and get the user's role
      // You may need to implement an API endpoint for this purpose
      // Example API request:
      // const response = await fetch('/api/verifyToken', {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${storedAccessToken}`,
      //   },
      // });
      // const data = await response.json();

      // Check if the user's role is allowed
      // Assuming the response contains a 'role' property
      // and the 'data.role' is the user's role
      const userRole = "data.role"; // Replace with the actual role from your API response

      if (allowedRoles.includes(userRole)) {
        return <Outlet />;
      } else {
        // User's role is not allowed
        return (
          <Navigate to="/" state={{ from: location }} replace />
        );
      }
    } catch (error) {
      // Error occurred while verifying the token
      console.error("Error verifying token:", error);
      return <Navigate to="/signInPage" state={{ from: location }} replace />;
    }
  }

  if (auth?.role && allowedRoles.includes(auth?.role)) {
    // User has the required role
    return <Outlet />;
  }

  // User has a role, but it's not in the allowedRoles
  return <Navigate to="/unauthorized" state={{ from: location }} replace />;
};


//   if (!auth?.role && !storedAccessToken) {
//     // Neither role nor access token exists, redirect to sign-in
//     return <Navigate to="/signInPage" state={{ from: location }} replace />;
//   }

//   if (!auth?.role && storedAccessToken) {
//     // Role doesn't exist but access token exists, consider user authenticated
//     // You might want to decode and verify the token server-side here
//     return <Outlet />;
//   }

//   if (auth?.role && allowedRoles.includes(auth?.role)) {
//     // User has the required role
//     return <Outlet />;
//   }

//   // User has a role, but it's not in the allowedRoles
//   return <Navigate to="/unauthorized" state={{ from: location }} replace />;
// };
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
