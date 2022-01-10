import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const PaymentPage = (props) => {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    username: props.bookingdetail["username"],
    email: props.bookingdetail["email"],
    type: props.bookingdetail["type"],
    roomnumber: "",
    number: props.bookingdetail["phonenumber"],
  });
  const [roomcount, setroomcount] = useState("");
  const [price, setprice] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  async function getroomdetail() {
    const searchtype = props.bookingdetail["type"];
    Axios.get("http://localhost:5000/api/getroomdata", {
      params: {
        searchid: searchtype,
      },
    }).then((res) => {
      const result = res.data;
      console.log(result);
      setroomcount(result["rooms"]["availrooms"]);
      setprice(result["rooms"]["price"]);
    });
  }
  function daysDifference() {
    var dateI1 = props.bookingdetail["checkin"];
    var dateI2 = props.bookingdetail["checkout"];
    var date1 = new Date(dateI1);
    var date2 = new Date(dateI2);
    var time_difference = date2.getTime() - date1.getTime();
    var result = time_difference / (1000 * 60 * 60 * 24);
    return result + 1;
  }
  let days = daysDifference();
  useEffect(() => {
    getroomdetail();
  }, []);
  const handlesubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:5000/api/updateroomdata", {
      username: values.usernames,
      roomtype: values.type,
      checkin: props.bookingdetail["checkin"],
      checkout: props.bookingdetail["checkout"],
      roombooked: values.roomnumber,
    })
      .then(() => {
        swal("Payment Successful!", "Your Room has been booked!", "success");
        navigate("/userdashboard");
      })
      .catch((err) => {
        swal("Payment Failed!", "Try again!", "error");
      });
  };

  return (
    <>
      <div className="paymentpage">
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form onSubmit={handlesubmit}>
                <div className="row">
                  <div className="col-50">
                    <h3>Billing Details</h3>
                    <label for="username">
                      <i className="fa fa-user"></i> Full Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      placeholder="John M. Doe"
                      disabled={true}
                    />
                    <label for="email">
                      <i className="fa fa-envelope"></i> Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      disabled={true}
                    />
                    <label for="type">
                      <i className="fa fa-address-card"></i> Room Type
                    </label>
                    <input
                      type="text"
                      id="adr"
                      name="type"
                      value={values.type}
                      onChange={handleChange}
                      disabled={true}
                    />
                    <label for="number">
                      <i className="fa fa-university">Phone Number</i>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="number"
                      value={values.number}
                      onChange={handleChange}
                      disabled={true}
                    />

                    <div className="row">
                      <div className="col-50">
                        <label for="roomcount">No of available rooms</label>
                        <input
                          type="text"
                          id="state"
                          name="roomcount"
                          value={roomcount}
                          disabled={true}
                        />
                      </div>
                      <div className="col-50">
                        <label for="roomnumber">No of selected rooms</label>
                        <input
                          type="number"
                          id="zip"
                          name="roomnumber"
                          value={values.roomnumber}
                          onChange={handleChange}
                          max={roomcount}
                          min={1}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-50">
                    <h3>Payment</h3>
                    <label for="fname">Accepted Cards</label>
                    <div className="icon-container">
                      <i
                        className="fab fa-cc-visa"
                        style={{ color: "navy" }}
                      ></i>
                      <i
                        className="fab fa-cc-amex"
                        style={{ color: "blue" }}
                      ></i>
                      <i
                        className="fab fa-cc-mastercard"
                        style={{ color: "red" }}
                      ></i>
                      <i
                        className="fab fa-cc-discover"
                        style={{ color: "orange" }}
                      ></i>
                    </div>
                    <label for="cname">Name on Card</label>
                    <input
                      type="text"
                      id="cname"
                      name="cardname"
                      placeholder="John More Doe"
                    />
                    <label for="ccnum">Card number</label>
                    <input
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      placeholder="1111-2222-3333-4444"
                    />
                    <label for="expmonth">Exp Month</label>
                    <input
                      type="text"
                      id="expmonth"
                      name="expmonth"
                      placeholder="September"
                    />

                    <div className="row">
                      <div className="col-50">
                        <label for="expyear">Exp Year</label>
                        <input
                          type="text"
                          id="expyear"
                          name="expyear"
                          placeholder="2018"
                        />
                      </div>
                      <div className="col-50">
                        <label for="cvv">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="352"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Continue to checkout"
                  className="btn"
                />
              </form>
            </div>
          </div>

          <div className="col-25">
            <div className="container">
              <h4>
                No of rooms
                <span className="price" style={{ color: "black" }}>
                  {/* <i className="fa fa-shopping-cart"></i> */}
                  <b>{values.roomnumber}</b>
                </span>
              </h4>
              <p>
                <span>Price/day</span> <span className="price">Rs {price}</span>
              </p>
              <p>
                <span>No of days</span>
                <span className="price">{days}</span>
              </p>
              <hr />
              <p>
                Total
                <span className="price" style={{ color: "black" }}>
                  <b>Rs {values.roomnumber * days * price}</b>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
