import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../Components/DashBoard/DashBoard";
import Login from "../Components/Signup-login/Login";
import Signup from "../Components/Signup-login/Signup";
import AuthRoute from "../Private/AuthRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRoute>
            <DashBoard />
          </AuthRoute>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
