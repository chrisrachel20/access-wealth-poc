import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: any) => {
  const hasJWT = localStorage.getItem("token") ? true : false;
  if (!hasJWT) {
    return <Navigate to="/" />;
  }
  return children;
};
