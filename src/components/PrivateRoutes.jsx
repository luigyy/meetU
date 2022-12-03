import React from "react";
import { Navigate } from "react-router-dom";

//TODO: redirect to complete profile on first sign up
const PrivateRoutes = ({ logged, children }) => {
  return logged ? children : <Navigate to="/landing" replace />;
};

export default PrivateRoutes;
