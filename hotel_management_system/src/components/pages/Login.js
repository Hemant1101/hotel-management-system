import React, { useState } from "react";
// import "./Form.css";
import LoginForm from "../forms/LoginForm";
// import FormSuccess from "../forms/FormSuccess";
import ViewDashboard from "../ViewDashboard";
const Login = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const submitloginform = () => {
    // if
    console.log("setlogi true");
    setIsLoggedin(true);
  };
  return (
    <>
      <div className="form-page">
        <div className="form-container">
          <div className="form-content-left">
            <img
              className="form-img"
              src={process.env.PUBLIC_URL + "/images/hero-img.jpg"}
              alt="spaceship"
            />
          </div>
          {!isLoggedin ? (
            <LoginForm submitForm={submitloginform} />
          ) : (
            <ViewDashboard />
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
