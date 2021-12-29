import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Login from "./Login";

function LoginPage() {
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
      <Login />
      <Footer />
    </>
  );
}

export default LoginPage;
