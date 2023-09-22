import { useLocation, Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import useAuth from "./hooks/useAuth";
import { useState, useEffect } from "react";
import axios from "axios";

const RequireAuth = ({ allowedRoles }) => {
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const storedAccessToken = Cookies.get("access_token");
  const decodedToken = auth.decodedToken; // Access decodedToken from client-side state
  // const userRole = response.data.data;
  //  const [decodedRole, setDecodedRole] = useState(null);

  console.log("Auth:", auth);
  console.log("Allowed Roles:", allowedRoles);
  console.log("Access Token:", storedAccessToken);

  useEffect(() => {
    // Check if the user has a valid access token and decoded token
    if (!auth?.role && storedAccessToken && decodedToken) {
      const userRole = decodedToken.payload.role;

      if (userRole) {
        setAuth({ ...auth, role: userRole });
        return <Outlet />;
      }
    }
  }, [auth, storedAccessToken, decodedToken, setAuth]);

  if (!auth?.role && !storedAccessToken) {
    return <Navigate to="/signInPage" state={{ from: location }} replace />;
  }

  if (!auth?.role && storedAccessToken) {
    return <Outlet />;
  }

  if (auth?.role && allowedRoles.includes(auth?.role)) {
    return <Outlet />;
  }

  return <Navigate to="/unauthorized" state={{ from: location }} replace />;
};

//START
//   if (!auth?.role && !storedAccessToken) {
//     // Neither role nor access token exists, redirect to sign-in
//     return <Navigate to="/signInPage" state={{ from: location }} replace />;
//   }

//   if (!auth?.role && storedAccessToken && decodedToken) {
//     // Role doesn't exist but access token exists, consider user authenticated
//     const userRole = decodedToken.payload.role;
//     // You might want to decode and verify the token server-side here
//     if (userRole) {
//       // Set the user's role in the authentication state
//       auth({ ...auth, role: userRole });
//     }
//     return <Outlet />;
//   }

//   if (auth?.role && allowedRoles.includes(auth?.role)) {
//     // User has the required role
//     return <Outlet />;
//   }

//   // User has a role, but it's not in the allowedRoles
//   return <Navigate to="/unauthorized" state={{ from: location }} replace />;
// };

//END
// //   const accessToken = Cookies.get("access_token");
// //   console.log("Auth:", auth);
// //   console.log("Allowed Roles:", allowedRoles);
// //   console.log("Access Token:", accessToken);
// //   return accessToken && allowedRoles.includes(auth?.role) ? (
// //     <Outlet />
// //   ) : (
// //     <Navigate to="/signInPage" state={{ from: location }} replace />
// //   );
// // };

// //   return auth?.role && allowedRoles.includes(auth?.role) ? (
// //     <Outlet />
// //   ) : auth?.email ? (
// //     <Navigate to="/unauthorized" state={{ from: location }} replace />
// //   ) : (
// //     <Navigate to="/signInPage" state={{ from: location }} replace />
// //   );
// // };
// const RequireAuth = ({ allowedRoles }) => {
//   const { auth } = useAuth();
//   const location = useLocation();
//   const [decodedRole, setDecodedRole] = useState(null);
//   // const navigate = useNavigate();
//   const storedAccessToken = Cookies.get("access_token");

//   useEffect(() => {
//     if (storedAccessToken) {
//       // If stored access token exists, make a request to decode it
//       axios
//         .get("https://mindafrikserver.onrender.com/user/decode-token", {
//           access_token: storedAccessToken,
//         })
//         .then((response) => {
//           if (response.data.status === "Success") {
//             setDecodedRole(response.data.data.role);
//           } else {
//             // Handle token verification error
//             console.error("Token verification failed:", response.data.error);
//             setDecodedRole(null);
//           }
//         })
//         .catch((error) => {
//           console.error("Error decoding token:", error);
//           setDecodedRole(null);
//         });
//     }
//   }, [storedAccessToken]);

//   if (!auth?.role && !decodedRole) {
//     // Neither role nor access token exists, redirect to sign-in
//     return <Navigate to="/signInPage" state={{ from: location }} replace />;
//   }

//   if (!auth?.role && decodedRole) {
//     // Role doesn't exist but access token exists, consider user authenticated
//     // Now, you can compare the decodedRole with the allowedRo  les
//     if (allowedRoles.includes(decodedRole)) {
//       return <Outlet />;
//     } else {
//       return <Navigate to="/" state={{ from: location }} replace />;
//     }
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
