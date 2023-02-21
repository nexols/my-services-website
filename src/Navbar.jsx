import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bolder" : "normal",
      textDecoration: isActive ? "underline" : "none",
      paddingBottom: "10px",
    };
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg">
              <div className="container-fluid">
                <NavLink className="navbar-brand logo" to="/">
                  Services Website
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav ms-auto">
                    <NavLink
                      style={navStyle}
                      className="nav-link"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                    <NavLink style={navStyle} className="nav-link" to="/about">
                      About
                    </NavLink>
                    <NavLink
                      style={navStyle}
                      className="nav-link"
                      to="/services"
                    >
                      Services
                    </NavLink>
                    <NavLink
                      style={navStyle}
                      className="nav-link"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
