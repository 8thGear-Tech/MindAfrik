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

  console.log("Auth:", auth);
  console.log("Allowed Roles:", allowedRoles);

  return auth?.role && allowedRoles.includes(auth?.role) ? (
    <Outlet />
  ) : auth?.email ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/signInPage" state={{ from: location }} replace />
  );
};

export default RequireAuth;
