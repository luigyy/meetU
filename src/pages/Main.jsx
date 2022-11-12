import React from "react";
import Interaction from "../components/Interaction";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Cards />
    </div>
  );
};

export default Main;
