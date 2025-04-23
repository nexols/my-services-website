import React from "react";
import { NavLink } from "react-router-dom";

const Common = ({ name, highlight, secHead, imgsrc, visit, btnname }) => (
  <>
    {/* Hero Banner */}
    <section className="container-fluid text-center py-5 border-bottom border-secondary">
      <h1 className="display-4">
        {name} <span className="fw-bolder">{highlight}</span> {secHead}
      </h1>
    </section>

    {/* Content + Image */}
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Text column */}
        <div className="col-lg-6 mb-4 mb-lg-0 text-start">
          <p className="lead mb-4">
            Leave your tech problems to us! Our expert team at CrunkDevs has you covered with tailored solutions.
          </p>
          <NavLink
            to={visit}
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
            {btnname}
          </NavLink>
        </div>

        {/* Image column */}
        <div className="col-lg-6 text-center">
          <img
            src={imgsrc}
            alt="Hero graphic"
            className="img-fluid w-75"
          />
        </div>
      </div>
    </section>
  </>
);

export default Common;
