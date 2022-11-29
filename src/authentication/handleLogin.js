import axios from "axios";
//TODO: use state to display error messages
//TODO: handle login

const URL = "http://localhost:5000/login";

const handleLogin = async (email, password) => {
  const response = axios.post(
    URL,
    { email: email, password: password },
    { headers: "Content-Type: application/json" }
  );
  return response;
};

export default handleLogin;
