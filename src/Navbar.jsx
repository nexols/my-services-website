import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bolder" : "normal",
    };
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg bg">
              <div className="container-fluid">
                <NavLink className="navbar-brand logo" to="/">
                  <h1>Nexols</h1>
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
                  <div className="navbar navbar-nav ms-auto text-center">
                    <NavLink
                      style={navStyle}
                      className="nav-link"
                      id="nav1"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      style={navStyle}
                      className="nav-link"
                      to="/about"
                      id="nav2"
                    >
                      About
                    </NavLink>
                    <NavLink
                      style={navStyle}
                      className="nav-link"
                      id="nav3"
                      to="/services"
                    >
                      Services
                    </NavLink>
                    <NavLink
                      style={navStyle}
                      className="nav-link"
                      id="nav4"
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
