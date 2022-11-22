import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import NavBar from "../../components/NavBar/NavBar";

import company from "../../utils/company";
import "./App.css";

import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import SignUpPage from "../SignUpPage/SignUpPage";
import DashboardPage from "../DashboardPage/DashboardPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="pageWrapper">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
