import React, { useState } from "react";
// import "./Form.css";
import LoginForm from "../forms/LoginForm";
import FormSuccess from "../forms/FormSuccess";

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
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
          {!isSubmitted ? (
            <LoginForm submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
