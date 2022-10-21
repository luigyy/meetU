import React from "react";
import { useState, useEffect } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const Landing = () => {
  // style in tailwind for register and login buttons
  const [registerState, setRegisterState] = useState(false);
  const [loginState, setLoginState] = useState(false);
  //
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
      <div className="overflow-hidden h-screen bg-[url('./images/UCR_Generales.jpg')] bg-cover bg-no-repeat bg-center">
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
        <div className="md:w-1/2 md:h-1/2 mt-32 bg-gray-200 shadow-2xl rounded-3xl bg-[rgb(0,0,0,0.4)]">
          {/** header */}
          <div className="p-10 font-extrabold text-white ">
            <h1 className="text-8xl tracking-tighter">
              Tinder<span className="text-blue-400">UCR </span>
            </h1>
            <h3 className="text-2xl pl-4">
              La app de citas hecha exclusivamente para estudiantes UCR 🌻
            </h3>
            <p className="italic font-light pt-5 pl-4">
              {" "}
              Registrate con tu correo institucional y conecta con la comunidad{" "}
              <span className="font-semibold text-blue-400">UCR </span> !
            </p>
          </div>
        </div>

        <div className="md:w-[40%]  md:min-h-1/2 p-10 relative bottom-[400px] ml-auto rounded-3xl ">
          <Login loginState={loginState} />
        </div>
        <div className="md:w-[40%]  md:min-h-1/2 p-10 relative bottom-[550px] ml-auto rounded-3xl ">
          <Register registerState={registerState} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
