import React from "react";
import { NavLink } from "react-router-dom";

const DigitalMarketing = () => {
  const services = [
    "Search Engine Marketing / Search Engine Optimization",
    "Social Media Management",
    "Campaign Management (Ads & PPC)",
    "Email Marketing",
    "Competitor Analysis",
    "Conversion Rate Optimization",
    "Landing Page Development",
    "Reputation Management",
  ];
  const half = Math.ceil(services.length / 2);

  return (
    <>
      {/* Banner (inherits light/dark from App wrapper) */}
      <section className="container-fluid text-center py-5 border-bottom border-secondary">
        <h1 className="display-4">Digital Marketing</h1>
      </section>

      {/* Content */}
      <section className="container py-5">
        <h3 className="border-start border-4 border-secondary ps-3 mb-4">
          <strong>Our Digital Marketing services include:</strong>
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
          At CrunkDevs, we're dedicated to delivering measurable results with tailored digital marketing solutions. Let us elevate your brand—contact us to get started.
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

export default DigitalMarketing;
