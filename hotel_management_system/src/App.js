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
import About from "./components/pages/About";
import UserDashboard from "./components/dashboards/UserDashboard";
import LoginPage from "./components/pages/LoginPage";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
