import React from "react";
import { useAuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user } = useAuthContext();

  if (user) {
    return children;
  } else {
    return <Navigate to={"/profile/signup"} />;
  }
};

export default RequireAuth;
