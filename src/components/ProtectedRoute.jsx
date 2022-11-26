import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
 const isAuth = localStorage.getItem("login");
 return isAuth ? <Outlet /> : <Navigate to="/logIn" replace={true} />;
  
}

export default ProtectedRoute