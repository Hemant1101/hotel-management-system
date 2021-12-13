import React, { useState } from "react";
// import "./Form.css";
import FormSignup from "./FormSignup.jsx";
import FormSuccess from "./FormSuccess.jsx";

const Form = () => {
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
            <FormSignup submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
