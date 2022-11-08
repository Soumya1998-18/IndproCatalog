import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Home from "../components/Home/Home";
import Profile from "../components/Home/Profile";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../components/Auth";

function Router() {
  const { authed } = useAuth();

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute redirectPath="/" isAllowed={authed}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute redirectPath="/" isAllowed={authed}>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default Router;
