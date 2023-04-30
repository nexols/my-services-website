import React from "react";
import "./common_services.css";
import { NavLink } from "react-router-dom";

function Techsols() {
  return (
    <div>
      <div className="container-fluid services_banner" id="ts">
        <h1>Digital Solutions</h1>
      </div>
      <div className="container services-content">
        <h3>
          <strong> Our Digital Solutions services include:</strong>
        </h3>

        <ul>
          <li>Salesforce</li>
          <li>AWS</li>
          <li>Cloud Migration</li>
          <li>Shopify</li>
          <li>PowerBi</li>
        </ul>

        <p>
          At Nexols, we offer a range of solutions to help businesses of all
          sizes achieve their goals. Our team of experts is dedicated to
          delivering customized solutions that meet your specific needs. Contact
          us today to learn more about how we can help your business succeed.
        </p>
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

export default Techsols;
