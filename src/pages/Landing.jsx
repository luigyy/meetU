import React from "react";
import { useState } from "react";
import Hero from "./Hero";

const Landing = () => {
  //register
  const [registerName, setRegisterName] = useState("");
  const [registerLastname, setRegisterLastname] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  //register

  return (
    <div>
      <Hero />
    </div>
  );
};

export default Landing;
