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

    // Ensure that the response contains the expected data structure
    const { role, access_token } = response.data;
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(access_token);
      return {
        ...prev,
        role: role,
        access_token: access_token,
        // role: response.data.role,
        // // role: response.data.role,
        // access_token: response.data.access_token,
        // access_token: response.data.access_token,
      };
    });
    return access_token;
  };
  return refresh;
};

export default useRefreshToken;
