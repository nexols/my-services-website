import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import { Error } from "@mui/icons-material";
import fbLogo from "./graphics/ions/facebook.png";
import linkedInLogo from "./graphics/ions/linkedin.png";
import instgramLogo from "./graphics/ions/instagram.png";

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
      <footer>
        <div className="container">
          <div className="row">
            <div className="data-1">
              <p id="first-para">All Rights Reserved &copy; {year} </p>
              <span>|</span>
              <NavLink style={Link} to="*" element={<Error />}>
                <p className="terms">Terms & Conditions</p>
              </NavLink>
            </div>

            <div className="data-2">
              <h3>Follow Us!</h3>
              <div className="social-icons">
                <NavLink
                  to={"https://www.linkedin.com/company/nexols1/"}
                  className="social-logo"
                >
                  <img
                    src={linkedInLogo}
                    style={{ width: "auto", height: "30px" }}
                    alt="logo"
                  />
                </NavLink>
                <NavLink
                  to={"https://instagram.com/nexols.official/"}
                  className="social-logo"
                >
                  <img
                    src={instgramLogo}
                    style={{ width: "auto", height: "30px" }}
                    alt="logo"
                  />
                </NavLink>
                <NavLink
                  to={"https://facebook.com/"}
                  className="social-logo"
                  id="fbLogo"
                >
                  <img
                    src={fbLogo}
                    style={{ width: "auto", height: "30px" }}
                    alt="logo"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
