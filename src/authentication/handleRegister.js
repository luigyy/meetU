import axios from "axios";
const URL = "http://localhost:5000/register";

const handleRegister = async (name, lastName, email, password) => {
  const response = axios.post(
    URL,
    { name, lastName, email, password },
    "Content-Type: application/json"
  );
  return response;
};

export default handleRegister;
