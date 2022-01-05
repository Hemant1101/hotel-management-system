import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MakeBookings = (props) => {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    username: props.userdetails["name"],
    email: props.userdetails["email"],
    phonenumber: props.userdetails["phonenumber"],
    type: "",
    checkin: "",
    checkout: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    props.setbookingdetail(values);
    navigate("/userdashboard/makepayment");
  };

  return (
    <>
      <div className="bookingform-container">
        <form onSubmit={handlesubmit}>
          <div className="booking-wrapper">
            <div className="form-inputs">
              <label className="form-label">Username</label>
              <input
                className="form-input"
                type="text"
                name="username"
                placeholder="Enter your username"
                value={values.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">email</label>
              <input
                className="form-input"
                type="text"
                name="email"
                placeholder="Enter your username"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">phonenumber</label>
              <input
                className="form-input"
                type="text"
                name="phonenumber"
                placeholder="Enter your username"
                value={values.phonenumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs col-lil">
              <label className="form-label">type of room</label>
              <select
                className="form-input"
                name="type"
                onChange={handleChange}
                value={values.type}
              >
                <option value="">select a room type</option>
                <option value="Delux">Delux</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Twin bed">Twin bed</option>
              </select>
            </div>
            <div className="form-inputs col-lil">
              <label className="form-label">check in time</label>
              <input
                className="form-input"
                type="date"
                name="checkin"
                placeholder="Enter your username"
                value={values.checkin}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs col-lil">
              <label className="form-label">check out time</label>
              <input
                className="form-input"
                type="date"
                name="checkout"
                placeholder="Enter your username"
                value={values.checkout}
                onChange={handleChange}
              />
            </div>

            <button className="form-input-btn" type="submit">
              Make Payment
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MakeBookings;
