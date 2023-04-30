import React from "react";
import "./common_services.css";
import { NavLink } from "react-router-dom";


function Dm() {
  return (
    <div>
      <div className="container-fluid services_banner" id="dm">
        <h1>Digital Marketing</h1>
      </div>
      <div className="container services-content">
        <h3>
          <strong> Our Digital Marketing services include:</strong>
        </h3>
        <ul>
          <li>Search Engine Marketing/Search Engine Optimization</li>
          <li>Social Media Management</li>
          <li>Campaign Management (Ads &amp; PPC)</li>
          <li>Email Marketing</li>
          <li>Competitor Analysis</li>
          <li>Conversion Rate Optimization</li>
          <li>Landing Page Development</li>
          <li>Reputation Management</li>
        </ul>
        <p>
          At Nexols, we are dedicated to providing our clients with exceptional
          digital marketing services that deliver measurable results. Let us
          help you take your business to the next level with our customized
          solutions. Contact us today to learn more.
        </p>{" "}
        <br />
        <NavLink to="/contact">
          <button
            className="btn btn-outline-primary"
            style={{ transition: "0.5s" }}
          >
            Contact Us
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Dm;
