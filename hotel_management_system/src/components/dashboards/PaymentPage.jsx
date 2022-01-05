import React, { useState } from "react";

const PaymentPage = (props) => {
  const [values, setValues] = useState({
    username: props.bookingdetail["username"],
    email: "",
    password: "",
    password2: "",
    number: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  // useEffect(() => {

  // }, []);

  return (
    <>
      <div className="paymentpage">
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form>
                <div className="row">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    <label for="fname">
                      <i className="fa fa-user"></i> Full Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      value={values.username}
                      onChange={handleChange}
                      placeholder="John M. Doe"
                    />
                    <label for="email">
                      <i className="fa fa-envelope"></i> Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                    />
                    <label for="adr">
                      <i className="fa fa-address-card"></i> Address
                    </label>
                    <input
                      type="text"
                      id="adr"
                      name="address"
                      placeholder="542 W. 15th Street"
                    />
                    <label for="city">
                      <i className="fa fa-university"></i> City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="New York"
                    />

                    <div className="row">
                      <div className="col-50">
                        <label for="state">State</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          placeholder="NY"
                        />
                      </div>
                      <div className="col-50">
                        <label for="zip">Zip</label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          placeholder="10001"
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
                Cart
                <span className="price" style={{ color: "black" }}>
                  <i className="fa fa-shopping-cart"></i>
                  <b>4</b>
                </span>
              </h4>
              <p>
                <span>Product 1</span> <span className="price">$15</span>
              </p>
              <hr />
              <p>
                Total
                <span className="price" style={{ color: "black" }}>
                  <b>$30</b>
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
