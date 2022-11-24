import React from "react";
import { useState, useEffect } from "react";
import Register from "../components/Register";
import Login from "../components/Login";
import "../Hero.css";

const Hero = () => {
  //states to toggle between login and register forms
  const [registerState, setRegisterState] = useState(false);
  const [loginState, setLoginState] = useState(false);

  //toggle between login and register forms
  useEffect(() => {
    setLoginState(registerState ? false : loginState);
  }, [registerState]);

  useEffect(() => {
    setRegisterState(loginState ? false : registerState);
  }, [loginState]);

  const buttonStyle =
    "font-semibold  p-3 px-4 rounded-3xl hover:bg-[rgb(0,0,0,.5)]";
  return (
    <div className="mb-4">
      <div className="overflow-hidden md:h-screen changeBg bg-cover bg-no-repeat bg-center">
        <div className="text-white flex justify-center bg-[rgb(0,0,0,.4)] py-5 space-x-9">
          <button
            onClick={(e) => setRegisterState(!registerState)}
            className={buttonStyle}
            href=""
          >
            {" "}
            Registrarse{" "}
          </button>
          <button
            onClick={(e) => setLoginState(!loginState)}
            className={buttonStyle}
            href=""
          >
            {" "}
            Iniciar sesión
          </button>
        </div>
        <div className="md:min-w-1/2 md:h-1/2 mt-10 md:mt-32 bg-gradient-to-r from-[rgb(0,0,0,0.5)] to-[rgb(0,0,0,.1)] shadow-2xl rounded-3xl">
          {/** header */}
          <div className="p-10 font-extrabold text-white ">
            <h1 className="pl-2 transition-all duration-1000 text-6xl md:text-8xl tracking-tighter">
              Meet<span className="text-blue-400">U </span>{" "}
              <span
                className={`transition-all duration-1000  ${
                  registerState || loginState ? "" : "opacity-0"
                }`}
              ></span>
            </h1>
            <h3 className="text-2xl pl-4">
              {/* La app de citas para estudiantes universitarios de Costa Rica 🔥 */}
            </h3>
            <p className="italic font-light pt-5 pl-4 ">
              {" "}
              Registrate con tu correo institucional y conecta con la comunidad!{" "}
            </p>
          </div>
        </div>

        <div
          className={`md:w-[40%]  md:min-h-1/2 p-10 md:relative md:bottom-[400px] md:ml-auto w-2/3 mx-auto md:m-0 rounded-3xl ${
            loginState ? "" : "hidden"
          }`}
        >
          <Login />
        </div>
        <div
          className={`md:w-[40%]  md:min-h-1/2 p-10 md:relative md:bottom-[550px] md:ml-auto w-2/3 mx-auto md:m-0 rounded-3xl ${
            registerState ? "" : "hidden"
          } `}
        >
          <Register />
        </div>
      </div>
    </div>
  );
};

export default Hero;
