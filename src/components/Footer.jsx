import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container border-top border-secondary pt-5">
        <div className="row gy-4">
          {/* Branding & Social */}
          <div className="col-md-6">
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
            <p className="small mt-1">
              From Idea to Impact.
            </p>
            <div className="d-flex">
              <div className="d-flex">
                <a href="https://www.linkedin.com/company/crunkdevs/" target="_blank" rel="noopener noreferrer" className="me-3 text-secondary">
                  <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-6 col-md-3">
            <h6 className="mb-3">Company</h6>
            <ul className="list-unstyled">
              {["/", "/about", "/services", "/contact"].map((to, i) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-decoration-none"
                    style={{ color: "currentColor" }}
                  >
                    {["Home", "About", "Contact"][i]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Links */}
          <div className="col-6 col-md-3">
            <h6 className="mb-3">Our Services</h6>
            <ul className="list-unstyled">
              {[
                { to: "/softwaredevelopment", label: "Software Development" },
                { to: "/digitalmarketing", label: "Digital Marketing" },
                { to: "/digitalsolutions", label: "Digital Solutions" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-decoration-none"
                    style={{ color: "currentColor" }}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          {/* <div className="col-12 col-md-3">
            <h6 className="mb-3">Legal</h6>
            <ul className="list-unstyled">
              {[
                { to: "/terms", label: "Terms & Conditions" },
                { to: "/privacy", label: "Privacy Policy" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-decoration-none"
                    style={{ color: "currentColor" }}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="row py-4">
          <div className="col text-center">
            <small style={{ color: "currentColor" }}>
              &copy; {year} CrunkDevs. All rights reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
