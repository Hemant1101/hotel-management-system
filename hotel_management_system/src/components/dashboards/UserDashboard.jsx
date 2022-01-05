import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import UserProfileCard from "./UserProfileCard";
import PaymentPage from "./PaymentPage";
import MakeBookings from "./MakeBookings";

function UserDashboard() {
  let history = useNavigate();
  const [userdata, setuserdata] = useState({});
  const [bookingdata, setbookingdata] = useState({});
  const [sidebar, setsidebar] = useState(false);
  const [closeBtn, setcloseBtn] = useState(false);
  const [userid, setuserid] = useState("");
  const [username, setusername] = useState("");
  const [useremail, setuseremail] = useState("");
  async function getdata() {
    const usid = Number(localStorage.getItem("login"));
    setuserid(usid);
    Axios.get("http://localhost:5000/api/getuserdata", {
      params: {
        searchid: usid,
      },
    }).then((res) => {
      const result = res.data;
      // console.log(result);
      const usemail = result["user"]["email"];
      const usname = result["user"]["name"];
      setuseremail(usemail);
      setusername(usname);
      setuserdata(result["user"]);
    });
  }

  useEffect(() => {
    getdata();
  }, []);

  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
    setsidebar(!sidebar);
    if (sidebar) {
      setcloseBtn(true);
    } else {
      setcloseBtn(false);
    }
  }
  return (
    <>
      <div className="userdashboardpage">
        <div className={sidebar ? "sidebar open" : "sidebar"}>
          <div className="logo-details" onClick={menuBtnChange}>
            <i className="bx bxs-dashboard icon"></i>
            <div className="logo_name">Actions</div>
            <i
              className={closeBtn ? "bx bx-menu-alt-right" : "bx bx-menu"}
              id="btn"
            ></i>
          </div>
          <ul className="nav-list">
            <li>
              <Link
                to="./"
                onClick={() => {
                  setsidebar(false);
                  getdata();
                }}
              >
                <i className="bx bx-grid-alt"></i>
                <span className="links_name">Dashboard</span>
              </Link>
              <span className="tooltip">Dashboard</span>
            </li>
            <li>
              <Link
                to="./makebookings"
                onClick={() => {
                  setsidebar(false);
                }}
              >
                <i className="bx bx-cart-alt"></i>
                <span className="links_name">Bookings</span>
              </Link>
              <span className="tooltip">Bookings</span>
            </li>
            <li>
              <Link to="/">
                <i className="bx bx-heart"></i>
                <span className="links_name">Home</span>
              </Link>
              <span className="tooltip">Home</span>
            </li>
            {/*<li>
              <a href="#">
                <i className="bx bx-cog"></i>
                <span className="links_name">Setting</span>
              </a>
              <span className="tooltip">Setting</span>
            </li> */}
            <li className="profile">
              <div className="profile-details">
                {/* <img src="profile.jpg" alt="profileImg" /> */}
                <i className="bx bxs-user-circle icon"></i>
                <div className="name_job">
                  <div className="name">{username}</div>
                  <div className="job">{useremail}</div>
                </div>
              </div>
              <i
                className="bx bx-log-out"
                id="log_out"
                onClick={() => {
                  setsidebar(false);
                }}
              ></i>
            </li>
          </ul>
        </div>
        <section className="home-section">
          <div className="text">Dashboard</div>
          <button onClick={() => history(-1)} className="btn-dash">
            Back
          </button>
          <div className="dashboard-canvas">
            <Routes>
              <Route
                path="/makepayment"
                element={<PaymentPage bookingdetail={bookingdata} />}
              />
              <Route
                path="/makebookings"
                element={
                  <MakeBookings
                    userdetails={userdata}
                    setbookingdetail={setbookingdata}
                  />
                }
              />
              <Route
                path="/"
                element={<UserProfileCard userdetails={userdata} />}
              />
            </Routes>
          </div>
        </section>
      </div>
    </>
  );
}

export default UserDashboard;
