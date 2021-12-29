import React, { useEffect, useState } from "react";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Room from "../Room";
import RoomsContent from "../RoomsContent";

function Rooms() {
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
      <div className="rooms-contaner">
        <Hero imgaddress="https://www.berjayahotel.com/sites/default/files/hotel-room-type/makati/01-deluxe-room.jpg" />
        <RoomsContent />
        <Room />
      </div>
    </>
  );
}

export default Rooms;
