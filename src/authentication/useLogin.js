import axios from "axios";
//TODO: use state to display error messages
//TODO: handle login

const URL = "http://localhost:5000/login";

const authLogin = async () => {
  //tests
  const email = "luigy06@gmail.com";
  const password = "cartago23";
  //tests

  axios
    .post(
      URL,
      { email: email, password: password },
      { headers: "Content-Type: application/json" }
    )
    .then((res) => console.log(res.data))
    .catch((err) =>
      console.log(
        err.response.status === 401 //unauthorized
          ? console.error("email or password incorrect")
          : console.log(err)
      )
    );
};

export default authLogin;
