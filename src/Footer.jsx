import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import { Error } from "@mui/icons-material";

const Footer = () => {
  const year = new Date().getFullYear();

  const Link = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bolder" : "normal",
      textDecoration: "none",
    };
  };

  return (
    <>
      <footer
        className="text-center d-flex justify-content-center"
        style={{ color: "#ffff" }}
      >
        <p className="me-2" id="first-para">
          All Rights Reserved &copy; {year}{" "}
        </p>
        <span className="me-2">|</span>
        <NavLink style={Link} to="*" element={<Error />}>
          <p className="terms">Terms & Conditions</p>
        </NavLink>
      </footer>
    </>
  );
};

export default Footer;
