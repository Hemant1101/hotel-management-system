import React from "react";
import { Link } from "react-router-dom";

function ViewDashboard() {
  return (
    <div className="loginsucceswrapper">
      <Link className="logibtnlink" to="/userdashboard">
        <button className="btn">View Your Dashboard</button>
      </Link>
    </div>
  );
}

export default ViewDashboard;
