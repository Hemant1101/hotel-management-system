import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
import RoomsContent from "../RoomsContent";
import AboutUs from "./AboutUs";

function Home() {
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
      <Hero imgaddress="/images/hero-img.jpg" />
      <main className="container">
        <AboutUs />
        <RoomsContent />
      </main>
      <Footer />
    </>
  );
}

export default Home;
