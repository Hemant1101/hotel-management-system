import React from "react";
import "./styles/App.css";
import "./styles/Global.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import Marketing from "./components/pages/Marketing";
import Rooms from "./components/pages/Rooms";
import AboutUs from "./components/pages/AboutUs";
import Login from "./components/pages/Login";
import UserDashboard from "./components/dashboards/UserDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
