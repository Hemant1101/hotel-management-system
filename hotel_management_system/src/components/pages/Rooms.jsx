import React from "react";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Room from "../Room";
import RoomsContent from "../RoomsContent";

function Rooms() {
  return (
    <>
      <Navbar />
      <div className="rooms-contaner">
        <Hero imgaddress="https://www.berjayahotel.com/sites/default/files/hotel-room-type/makati/01-deluxe-room.jpg" />
        <RoomsContent />
        <Room />
      </div>
    </>
  );
}

export default Rooms;
