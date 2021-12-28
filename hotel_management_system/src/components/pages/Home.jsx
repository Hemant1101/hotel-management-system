import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
import RoomsContent from "../RoomsContent";
import AboutUs from "./AboutUs";
import Login from "./Login";

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    let data = localStorage.getItem("login");
    console.log(data);
    setLoggedIn(data !== undefined);
  }, []);
  const loggedout = () => {
    setLoggedIn(false);
  };
  return (
    <>
      <Navbar loggedIn={loggedIn} setLogValue={loggedout} />
      <Hero imgaddress="/images/hero-img.jpg" />
      <main className="container">
        <AboutUs />
        <RoomsContent />
        <Login />
      </main>
      <Footer />
    </>
  );
}

export default Home;
