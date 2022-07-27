import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const jwt = localStorage.getItem("userToken");

  return jwt ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedRoutes;
