import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { useAuth } from "../AuthContext";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  // const { authenticate } = useAuth();
  const trueok = useSelector((state) => state.auth.authenticate);
  return trueok === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
