import React from "react";
import useLogin from "./useLogin";
import { Link } from "react-router-dom";
import validateInfo from "./validateInfo";
// import "./Form.css";

const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useLogin(
    submitForm,
    validateInfo
  );

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Enter Your Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button className="form-input-btn" type="submit">
          Login
        </button>
        <span className="form-input-login">
          Do not have an account? <Link to="/sign-up">Create one Now</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
