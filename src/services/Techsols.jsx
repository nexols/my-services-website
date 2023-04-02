import React from "react";
import "./common_services.css";
import solBanner from "../graphics/images/Banners/services/sol.svg";

function Techsols() {
  return (
    <div>
      <div className="container-fluid services_banner">
        <img className="w-100 p-0 m-0" src={solBanner} alt="" />
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
