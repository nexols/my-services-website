import React from "react";
import { NavLink } from "react-router-dom";

const DigitalSolutions = () => {
  const services = [
    "Salesforce",
    "AWS",
    "Cloud Migration",
    "Shopify",
    "Power BI",
  ];
  const half = Math.ceil(services.length / 2);

  return (
    <>
      {/* Banner (inherits theme) */}
      <section className="container-fluid text-center py-5 border-bottom border-secondary">
        <h1 className="display-4">Digital Solutions</h1>
      </section>

      {/* Content */}
      <section className="container py-5">
        <h3 className="border-start border-4 border-secondary ps-3 mb-4">
          <strong>Our Digital Solutions services include:</strong>
        </h3>

        <div className="row g-4 mb-5">
          {[0, 1].map((col) => (
            <div className="col-md-6" key={col}>
              <ul className="list-group list-group-flush">
                {services
                  .slice(col * half, col * half + half)
                  .map((svc, idx) => (
                    <li
                      key={idx}
                      className="list-group-item bg-transparent border-bottom border-secondary ps-0"
                    >
                      {svc}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="lead mb-4">
          At CrunkDevs, we offer tailored digital solutions—from Salesforce and AWS integrations to cloud migrations and e-commerce platforms—designed to drive your business forward. Our experts partner with you to build scalable, secure systems that fit your unique needs.
        </p>

        <NavLink
          to="/contact"
          className="btn"
          style={{
            color: "currentColor",
            border: "1px solid currentColor",
            backgroundColor: "transparent",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Contact Us
        </NavLink>
      </section>
    </>
  );
};

export default DigitalSolutions;
