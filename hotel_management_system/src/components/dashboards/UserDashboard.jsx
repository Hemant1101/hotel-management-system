import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserDashboard() {
  const [sidebar, setsidebar] = useState(false);
  const [closeBtn, setcloseBtn] = useState(false);
  const [userid, setuserid] = useState("");
  const [username, setusername] = useState("");
  const [useremail, setuseremail] = useState("");
  async function getdata() {
    const usid = Number(localStorage.getItem("login"));
    console.log(typeof usid);
    setuserid(usid);
    Axios.get("http://localhost:5000/api/getuserdata", {
      params: {
        searchid: usid,
      },
    }).then((res) => {
      const result = res.data;
      console.log(result);
      const usemail = result["user"]["email"];
      const usname = result["user"]["name"];
      setuseremail(usemail);
      setusername(usname);
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
        <div
          className={sidebar ? "sidebar open" : "sidebar"}
          onClick={menuBtnChange}
        >
          <div className="logo-details">
            <i className="bx bxs-dashboard icon"></i>
            <div className="logo_name">Actions</div>
            <i
              className={closeBtn ? "bx bx-menu-alt-right" : "bx bx-menu"}
              id="btn"
            ></i>
          </div>
          <ul className="nav-list">
            <li>
              <a href="#" onClick={getdata}>
                <i className="bx bx-grid-alt"></i>
                <span className="links_name">Dashboard</span>
              </a>
              <span className="tooltip">Dashboard</span>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-user"></i>
                <span className="links_name">User</span>
              </a>
              <span className="tooltip">User</span>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-chat"></i>
                <span className="links_name">Messages</span>
              </a>
              <span className="tooltip">Messages</span>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-pie-chart-alt-2"></i>
                <span className="links_name">Analytics</span>
              </a>
              <span className="tooltip">Analytics</span>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-folder"></i>
                <span className="links_name">File Manager</span>
              </a>
              <span className="tooltip">Files</span>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-cart-alt"></i>
                <span className="links_name">Order</span>
              </a>
              <span className="tooltip">Order</span>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-heart"></i>
                <span className="links_name">Saved</span>
              </a>
              <span className="tooltip">Saved</span>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-cog"></i>
                <span className="links_name">Setting</span>
              </a>
              <span className="tooltip">Setting</span>
            </li>
            <li className="profile">
              <div className="profile-details">
                {/* <img src="profile.jpg" alt="profileImg" /> */}
                <i className="bx bxs-user-circle icon"></i>
                <div className="name_job">
                  <div className="name">{username}</div>
                  <div className="job">{useremail}</div>
                </div>
              </div>
              <i className="bx bx-log-out" id="log_out"></i>
            </li>
          </ul>
        </div>
        <section className="home-section">
          <div className="text">Dashboard</div>
          <Link to="/" className="btn-dash">
            Back
          </Link>
        </section>
      </div>
    </>
  );
}

export default UserDashboard;
