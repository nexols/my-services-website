import React from "react";
import "./common_services.css";

function Dm() {
  return (
    <div>
      <div
        className="container-fluid services_banner"
        style={{ backgroundColor: "#ed5547" }}
      >
   
        <h1>Digital Marketing</h1>
      </div>
      <div className="container services-content">
        <h4>
          <strong> Our services include:</strong>
        </h4>

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
        </p>
      </div>
    </div>
  );
}

export default Dm;
