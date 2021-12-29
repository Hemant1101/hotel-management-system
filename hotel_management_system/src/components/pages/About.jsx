import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import AboutUs from "./AboutUs";

const About = React.memo(() => {
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
      <AboutUs />
      <Footer />
    </>
  );
});

export default About;
