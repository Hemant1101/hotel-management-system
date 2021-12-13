import React from "react";
import Hero from "../Hero";
import RoomsContent from "../RoomsContent";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <>
      <Hero imgaddress="/images/hero-img.jpg" />
      <main className="container">
        <AboutUs />
        <RoomsContent />
      </main>
    </>
  );
}

export default Home;
