import Axios from "axios";
import { useState, useEffect } from "react";

const useLogin = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // setErrors(validate(values));
    setIsSubmitting(true);
    Axios.post("http://localhost:5000/login", {
      password: values.password,
      email: values.email,
    }).then(() => {
      console.log("success");
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useLogin;
