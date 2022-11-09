import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ logged, children }) => {
  return logged ? <Navigate to="/" replace /> : children;
};

export default PublicRoutes;
