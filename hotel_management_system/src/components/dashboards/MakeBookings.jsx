import React from "react";
import { Link } from "react-router-dom";

const MakeBookings = () => {
  return (
    <>
      <div className="bookingform-container">
        <form>
          <div className="form-inputs">
            <label className="form-label">Username</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              //   value={values.username}
              //   onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">email</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              //   value={values.username}
              //   onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">phonenumber</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              //   value={values.username}
              //   onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">type of room</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              //   value={values.username}
              //   onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">no. of rooms available room:5</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              //   value={values.username}
              //   onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">check in time</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              //   value={values.username}
              //   onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">check out time</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              //   value={values.username}
              //   onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">total bill</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              //   value={values.username}
              //   onChange={handleChange}
            />
          </div>
          <Link to="/userdashboard/makepayment">
            <button className="form-input-btn" type="submit">
              Make Payment
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default MakeBookings;
