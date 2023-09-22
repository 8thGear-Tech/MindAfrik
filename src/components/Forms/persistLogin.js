import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import useRefreshToken from "../useRefreshToken";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  //   const storedAccessToken = Cookies.get("access_token");
  const { auth, persist } = useAuth();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    // Only verify the refresh token if the user is logged in and the access token is expired or invalid.
    if (auth?.access_token && !auth?.access_token_valid) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }

    return () => (isMounted = false);
  }, [auth, refresh]);

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`);
    console.log(`aT: ${JSON.stringify(auth?.access_token)}`);
  }, [isLoading]);

  return (
    <>{!isLoading && !auth?.access_token ? <Outlet /> : <p>Loading...</p>}</>
  );
};

export default PersistLogin;

//     // persist added here AFTER tutorial video
//     // Avoids unwanted call to verifyRefreshToken
//     !auth?.access_token && persist ? verifyRefreshToken() : setIsLoading(false);

//     return () => (isMounted = false);
//   }, []);

//   useEffect(() => {
//     console.log(`isLoading: ${isLoading}`);
//     console.log(`aT: ${JSON.stringify(auth?.access_token)}`);
//   }, [isLoading]);

//   return (
//     <>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>
//   );
// };

// export default PersistLogin;
