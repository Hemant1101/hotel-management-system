import React from "react";
import { Link } from "react-router-dom";

function RoomsContent() {
  return (
    <>
      <div className="rooms">
        <div className="room-content">
          <h2 className="h2">COMFORTABLE, CONTEMPORARY ROOMS & SUITES</h2>
          <p className="p">
            Choose from our modern Superior or Deluxe Rooms, or upgrade to a
            luxurious One-Bedroom Suite for your visit to the “City by the Bay.”
            Our hotel rooms range from 250 to 600 square feet of space.
          </p>
          <div>
            <Link to="rooms">
              <button className="btn">Rooms</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomsContent;
