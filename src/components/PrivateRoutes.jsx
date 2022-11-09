import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ logged, children }) => {
  return logged ? children : <Navigate to="/landing" replace />;
};

export default PrivateRoutes;
