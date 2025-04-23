import React from "react";
import { NavLink } from "react-router-dom";
import { Around } from "@theme-toggles/react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];
const SERVICE_LINKS = [
  { to: "/softwaredevelopment", label: "Software Development" },
  { to: "/digitalmarketing", label: "Digital Marketing" },
  { to: "/digitalsolutions", label: "Digital Solutions" },
];

const Navbar = ({ theme, onToggleTheme }) => (
  <nav
    className={`
      navbar navbar-expand-lg 
      navbar-${theme} bg-${theme} 
      border-bottom border-secondary 
      sticky-top py-2
    `}
  >
    <div className="container">
      {/* Brand */}
      <NavLink
        to="/"
        className="navbar-brand p-0"
        style={{
          fontFamily: "Poppins, sans-serif",
          color: "currentColor",
          textDecoration: "none",
        }}
      >
        <span style={{ fontWeight: 400 }}>Crunk</span>
        <span style={{ fontWeight: 700 }}>Devs.</span>
      </NavLink>

      {/* Mobile toggle */}
      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      {/* Nav items */}
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav ms-auto align-items-center">
          {NAV_LINKS.map(({ to, label }) => (
            <li className="nav-item" key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-bold" : ""} text-${theme === "dark" ? "light" : "dark"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* Services dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#services"
              id="servicesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "currentColor", transition: "color 0.3s" }}
            >
              Services
            </a>
            <ul
              className={`dropdown-menu dropdown-menu-${theme} dropdown-menu-end`}
              aria-labelledby="servicesDropdown"
              style={{
                backgroundColor:
                  theme === "dark" ? "var(--bs-dark)" : "var(--bs-light)",
                border: "1px solid var(--bs-secondary)",
              }}
            >
              {SERVICE_LINKS.map(({ to, label }) => {
                const activeBg =
                  theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)";
                const hoverBg =
                  theme === "dark" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)";

                return (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className="dropdown-item"
                      style={({ isActive }) => ({
                        color: "currentColor",
                        backgroundColor: isActive ? activeBg : "transparent",
                        transition: "background-color 0.2s",
                      })}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = hoverBg;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = e.currentTarget.classList.contains(
                          "active"
                        )
                          ? activeBg
                          : "transparent";
                      }}
                    >
                      {label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </li>


          {/* Theme toggle */}
          <li className="nav-item d-flex align-items-center">
            <Around
              toggled={theme === "dark"}
              toggle={onToggleTheme}
              duration={300}
              forceMotion
              idPrefix="theme-switch"
              aria-label="Toggle dark/light theme"
              style={{
                width: "28px",
                height: "28px",
                cursor: "pointer",
                color: "inherit",
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
