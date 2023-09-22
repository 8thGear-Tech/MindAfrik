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
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.access_token);
      return {
        ...prev,
        role: response.data.role,
        access_token: response.data.access_token,
      };
    });
    return response.data.access_token;
  };
  return refresh;
};

export default useRefreshToken;
