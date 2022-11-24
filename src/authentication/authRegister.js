import axios from "axios";
const URL = "http://localhost:5000/register";

const authRegister = async ({ name, lastName, email, password }) => {
  //get this from props
  // const name = "name";
  // const lastName = "lastname";
  // const email = "email@gmail.com";
  // const password = "password";
  // //get this from props

  axios
    .post(
      URL,
      { name, lastName, email, password },
      "Content-Type: application/json"
    )
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

export default authRegister;
