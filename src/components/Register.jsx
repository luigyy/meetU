import React from "react";
import { useState } from "react";
import handleRegister from "../authentication/handleRegister";
import "../index.css";

// Showing sucess message
const SucessMessage = ({ submitted }) => {
  return (
    <div className="text-center rounded-md px-4 py-2 mt-3 text-white bg-green-500">
      <h1> {submitted}</h1>
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

const Register = () => {
  //states for register and login buttons
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleLastname = (e) => {
    setLastname(e.target.value);
    setSubmitted(false);
  };

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    //checked if all fields are provided
    if (name === "" || lastname === "" || email === "" || password === "") {
      return setError("All fields are required");
    }

    try {
      const response = await handleRegister(name, lastname, email, password);

      //clear fields
      setName("");
      setLastname("");
      setEmail("");
      setPassword("");
      //clear fields

      setSubmitted("Registered successfully");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  //==============================
  return (
    <div className={`w-full max-w-xs md:mt-16 `}>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="text-gray-700 font-bold text-lg text-center pb-4">
          Registrarse
        </p>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Nombre"
            onChange={(e) => handleName(e)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Apellido
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Apellido"
            onChange={(e) => handleLastname(e)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email"
            onChange={(e) => handleEmail(e)}
          />
        </div>
        <div className="mb-6">
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
            className="bg-blue-400 transition-color duration-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={(e) => handleSubmit(e)}
          >
            Registrarse
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
  );
};

export default Register;
