import Axios from "axios";
import { useState, useEffect } from "react";

const useLogin = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLogging, setIsLogging] = useState(false);

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
    setIsLogging(true);
    Axios.post("http://localhost:5000/login", {
      password: values.password,
      email: values.email,
    })
      .then((res) => {
        console.log(res);
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isLogging) {
      console.log("callback");
      callback();
    } else {
      console.log("notcallback");
    }
  }, []);

  return { handleChange, handleSubmit, values, errors };
};

export default useLogin;
