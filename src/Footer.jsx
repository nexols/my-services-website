import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer
        className="text-center d-flex justify-content-center"
        style={{ color: "#1976d2" }}
      >
        <p className="me-2" id="first-para">All Rights Reserved &copy; {year} </p>
        <span className="me-2">|</span>
        <p>Terms & Conditions</p>
      </footer>
    </>
  );
};

export default Footer;
