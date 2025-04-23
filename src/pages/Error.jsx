import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => (
  <>
    {/* 404 Banner */}
    <section className="container-fluid text-center py-5 border-bottom border-secondary">
      <h1 className="display-1 fw-bold">404</h1>
      <p className="lead mb-0">Page Not Found</p>
    </section>

    {/* Message & Back Link */}
    <section className="container py-5 text-center">
      <p className="mb-4">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <NavLink
        to="/"
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
        Go Home
      </NavLink>
    </section>
  </>
);

export default Error;
