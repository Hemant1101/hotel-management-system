import React, { useEffect, useState } from "react";
import Form from "../forms/Form";
import Footer from "../Footer";
import Navbar from "../Navbar";

function SignUp() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    let data = localStorage.getItem("login");
    // console.log(data);
    setLoggedIn(data !== null);
  }, []);
  const loggedout = () => {
    localStorage.clear("login");
    setLoggedIn(false);
  };
  return (
    <>
      <Navbar loggedIn={loggedIn} setLogValue={loggedout} />
      <Form />
      <Footer />
    </>
  );
}

export default SignUp;
