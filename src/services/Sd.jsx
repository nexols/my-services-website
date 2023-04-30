import React from "react";
import "./common_services.css";
import { NavLink } from "react-router-dom";

function Sd() {
  return (
    <div>
      <div className="container-fluid services_banner" id="sd">
        <h1>Software Development</h1>
      </div>
      <div className="container services-content">
        <h3>
          <strong> Our Software Development services include:</strong>
        </h3>

        <ul>
          <li>Q/A Testing</li>
          <li>UI/UX Design</li>
          <li>Mobile App Development</li>
          <li>Custom Management System Development</li>
          <li>Web App Development</li>
          <li>WordPress Development</li>
          <li>DevOPs</li>
          <li>API or Plugin Integration</li>
          <li>Ecommerce Development</li>
          <li>Shopify Development</li>
          <li>Web Hosting and Maintenance</li>
        </ul>

        <p>
          At Nexols, we are dedicated to providing our clients with exceptional
          software development services that deliver high-quality products and
          user experiences. Let us help you take your business to the next level
          with our customized solutions. Contact us today to learn more.
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

export default Sd;
