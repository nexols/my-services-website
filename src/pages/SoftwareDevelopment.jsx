import React from "react";
import { NavLink } from "react-router-dom";

const SoftwareDevelopment = () => {
  const services = [
    "Q/A Testing",
    "UI/UX Design",
    "Mobile App Development",
    "Custom Management System Development",
    "Web App Development",
    "WordPress Development",
    "DevOps",
    "API & Plugin Integration",
    "Ecommerce Development",
    "Shopify Development",
    "Web Hosting & Maintenance",
  ];
  const half = Math.ceil(services.length / 2);

  return (
    <>
      {/* Banner (inherits bg- and text- from App) */}
      <section className="container-fluid text-center py-5 border-bottom border-secondary">
        <h1 className="display-4">Software Development</h1>
      </section>

      {/* Content */}
      <section className="container py-5">
        <h3 className="border-start border-4 border-secondary ps-3 mb-4">
          <strong>Our Software Development services include:</strong>
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
                      className="list-group-item border-bottom border-secondary ps-0"
                    >
                      {svc}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="lead mb-4">
          At CrunkDevs, we're committed to delivering end-to-end software
          solutions with best-in-class quality and UX. Let our expert team craft
          the perfect product for your needs—get in touch to start your project
          today.
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

export default SoftwareDevelopment;
