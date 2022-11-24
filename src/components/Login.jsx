import React from "react";
import { useState } from "react";
import authLogin from "../authentication/authLogin";
import "../index.css";

// Showing sucess message
const SucessMessage = ({ submitted }) => {
  return (
    <div className="">
      <h1>User successfully registered!!</h1>
    </div>
  );
};

// Showing error message if error is true
const ErrorMessage = ({ error }) => {
  return (
    <div className=" text-center rounded-md px-4 py-2 mt-3 text-white bg-red-500">
      <h1>Please enter all the fields</h1>
    </div>
  );
};

const Login = ({ loginState }) => {
  //login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //login

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
    setEmail("");
    setPassword("");
    authLogin(email, password);
  };
  //==============================
  return (
    <div>
      <div className={` w-full max-w-xs ${loginState ? "" : "hidden"}`}>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="text-gray-700 font-bold text-lg text-center pb-4">
            Iniciar sesión
          </p>
          <div class="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email"
              onChange={(e) => handleEmail(e)}
            />
          </div>
          <div class="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => handlePassword(e)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-400 transition-color duration-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded "
              type="button"
              onClick={(e) => handleSubmit(e)}
            >
              Sign In
            </button>
            <a
              className="inline-block transition-color duration-500 align-baseline font-bold text-sm text-blue-400 hover:text-blue-500"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          {/**error message */}
          <div>{error ? <ErrorMessage error={error} /> : ""}</div>
          {/**success message */}
          <div>{submitted ? <SucessMessage submitted={submitted} /> : ""}</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
