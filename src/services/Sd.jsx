import React from "react";
import "./common_services.css";
import sdBanner from "../graphics/images/Banners/services/sd.svg";

function Sd() {
  return (
    <div>
      <div className="container-fluid services_banner">
        <img className="w-100 p-0 m-0" src={sdBanner} alt="" />
      </div>
      <div className="container services-content">
        <h4>
          <strong> Our services include:</strong>
        </h4>

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
      </div>
    </div>
  );
}

export default Sd;
