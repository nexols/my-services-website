import React from "react";
import "./common_services.css";

function Techsols() {
  return (
    <div>
      <div
        className="container-fluid services_banner"
        style={{ backgroundColor: "#f2bd2c" }}
      >
        <h1>Digital Solutions</h1>
      </div>
      <div className="container services-content">
        <h4>
          <strong> Our services include:</strong>
        </h4>

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
      </div>
    </div>
  );
}

export default Techsols;
