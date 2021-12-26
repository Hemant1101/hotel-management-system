import React from "react";
import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
import RoomsContent from "../RoomsContent";
import AboutUs from "./AboutUs";
import Login from "./Login";

function Home() {
  return (
    <>
      <Navbar />
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
