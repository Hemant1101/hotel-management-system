import React from "react";
import Hero from "../Hero";
import RoomsContent from "../RoomsContent";
import AboutUs from "./AboutUs";
import Login from "./Login";

function Home() {
  return (
    <>
      <Hero imgaddress="/images/hero-img.jpg" />
      <main className="container">
        <AboutUs />
        <RoomsContent />
        {/* <Login /> */}
      </main>
    </>
  );
}

export default Home;
