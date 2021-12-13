import React from "react";
import { Button } from "../utilities/Button";

function AboutUs() {
  return (
    <div id="aboutUs" className="aboutUs">
      <div className="left-content">
        <h2 className="h2">Welcome to Our Hotel</h2>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nulla
          velit. Facere odit eius ullam error dolore aliquid, exercitationem
          praesentium, magnam iste necessitatibus quod? Nobis repellat optio ea
          voluptates sint.
        </p>
      </div>
      <div className="right-content">
        <h4 className="h4">Make A Reservation</h4>
        <Button txtContent="Book Now" clname="btn" />
        <span>bestHotel101@gmail.com</span>
        <span>+91 1234567890</span>
        <span>Contact Us we are ready 24*7 for you</span>
      </div>
    </div>
  );
}

export default AboutUs;
