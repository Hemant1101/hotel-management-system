import React, { useState, useEffect } from "react";
import { Button } from "./utilities/Button";
import { Link } from "react-router-dom";
// import "./Navbar.css";

const Navbar = React.memo((props) => {
  // const [userloggedin, setUserloggedin] = useState(false);
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);
  const [fixed, setFixed] = useState(false);

  const handleClick = () => setClick(!click);
  const closemobilemenu = () => setClick(false);
  const logout = () => {
    localStorage.clear("login");
    console.log("clear");
    props.setLogValue();
  };
  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setFixed(window.scrollY > 90);
    });
  }, []);

  return (
    <>
      <nav className={fixed ? "navbar fixed" : "navbar"}>
        <Link to="/" className="navbar-logo">
          home
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closemobilemenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className="nav-links" onClick={closemobilemenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/rooms" className="nav-links" onClick={closemobilemenu}>
              Rooms
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-links" onClick={closemobilemenu}>
              Gallery
            </Link>
          </li>
          {/* <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closemobilemenu}
            >
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li> */}
          {!props.loggedIn ? (
            <>
              <li className="nav-item nav-mobile">
                <Link
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={closemobilemenu}
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item nav-mobile">
                <Link
                  to="/login"
                  className="nav-links-mobile"
                  onClick={closemobilemenu}
                >
                  Login
                </Link>
              </li>
            </>
          ) : (
            <button className="nav-links-mobile" onClick={logout}>
              Log out
            </button>
          )}
        </ul>
        {!props.loggedIn ? (
          <>
            <Button clname="btn" txtContent="Login" routepath="/login" />
            <Button clname="btn" txtContent="Sign Up" routepath="/sign-up" />
          </>
        ) : (
          <>
            <a href="/userdashboard" className="dashboard-icon">
              <i className="fa fa-user user-icon"></i>
            </a>
            <button className="btn" onClick={logout}>
              Log out
            </button>
          </>
        )}
      </nav>
    </>
  );
});

export default Navbar;
