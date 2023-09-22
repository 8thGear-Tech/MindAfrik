import axios from "axios";
import useAuth from "./hooks/useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get(
      "https://mindafrikserver.onrender.com/user/refresh-token",
      {
        withCredentials: true,
      }
    );

    const { data } = response;

    if (data.status === "Success") {
      const { role, access_token } = data.data;
      //     // const access_token = response?.data?.access_token;
      //     // const role = response?.data?.role;
      console.log("Access Token:", access_token);
      console.log("Role:", role);
      //     setAuth({ email, password, role, access_token }, true);

      setAuth((prev) => {
        console.log(JSON.stringify(prev));
        console.log("Access token:", access_token);
        //   console.log(response.data.access_token);
        return {
          ...prev,
          role: role,
          access_token: access_token,
          // role: response.data.role,
          // access_token: response.data.access_token,
        };
      });
    }
    return response.data.access_token;
  };
  return refresh;
};

export default useRefreshToken;
