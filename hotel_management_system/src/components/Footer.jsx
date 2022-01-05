import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <p>Hotel Management System</p>
          <a
            href="http://localhost:5000/admin/login"
            target="_blank"
            rel="noreferrer"
          >
            Admin
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
