import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import image from "./graphics/logo.png";
import toggle from "./graphics/toggle.png";

const Navbar = () => {
  // *** dropdown ***

  const [isOpen, setIsOpen] = React.useState();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const timeoutRef = React.useRef(null);

  const handleMouseLeave = () => {
    return (timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100));
  };
  const handleContentMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };
  const handleContentMouseLeave = () => {
    setIsOpen(false);
  };

  // *** dropdown ***

  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bolder" : "normal",
    };
  };
  return (
    <>
      <div className="navbar-main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg bg">
                <div className="container-fluid">
                  <NavLink className="navbar-brand" to="/">
                    <img
                      className="logo"
                      src={image}
                      style={{
                        width: "auto",
                        height: "70px",
                      }}
                      alt=""
                    />
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
                        Services &nbsp;
                        <span
                          onMouseEnter={toggleDropdown}
                          onMouseLeave={handleMouseLeave}
                          style={{ color: "black" }}
                        >
                          <img
                            src={toggle}
                            style={{ height: "auto", width: "13px" }}
                            alt="toggle"
                          />
                        </span>
                        <div className="services-dropdown">
                          {isOpen && (
                            <div
                              onMouseEnter={handleContentMouseEnter}
                              onMouseLeave={handleContentMouseLeave}
                              className="dropdown-content"
                            >
                              <li id="first">
                                <NavLink to="*">Web Development</NavLink>
                              </li>
                              <li>
                                <NavLink to="*">Digital Marketing</NavLink>
                              </li>
                              <li id="second">
                                <NavLink to="*">Solutions</NavLink>
                              </li>
                            </div>
                          )}
                        </div>
                      </NavLink>

                      <NavLink
                        style={navStyle}
                        className="nav-link"
                        id="nav4"
                        to="*"
                      >
                        Portfolio
                      </NavLink>
                      <NavLink
                        style={navStyle}
                        className="nav-link"
                        id="nav5"
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
      </div>
    </>
  );
};

export default Navbar;
