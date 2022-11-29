import axios from "axios";
const URL = "http://localhost:5000/register";

const handleRegister = async (name, lastName, email, password) => {
  //get this from props
  // const name = "name";
  // const lastName = "lastname";
  // const email = "email@gmail.com";
  // const password = "password";
  // //get this from props

  const response = axios.post(
    URL,
    { name, lastName, email, password },
    "Content-Type: application/json"
  );
  return response;
};

export default handleRegister;
