import axios from "axios";

const URL = "http://localhost:5000/login";

const handleLogin = async (email, password) => {
  const response = axios.post(
    URL,
    { email: email, password: password },
    { headers: "Content-Type: application/json" },
    { withCredentials: true }
  );
  return response;
};

export default handleLogin;
