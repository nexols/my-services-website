import React from "react";
import "./common.css";

import { NavLink } from "react-router-dom";

const Common = (props) => {
  const btnStyle = () => {
    return {
      textDecoration: "none",
    };
  };
  return (
    <>
      <section id="header" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-md-flex align-items-center">
              <div>
                <h1>
                  {props.name}
                  <strong className="name-strong"> XYZ Company</strong>
                </h1>
                <h4 className="my-4">
                  We are a team of talented developers making Web Apps
                </h4>
                <div>
                  <NavLink to={props.visit} style={btnStyle}>
                    <button
                      className="btn btn-outline-primary"
                      style={{ transition: "0.5s" }}
                    >
                      {props.btnname}
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                className="w-75 header-img"
                alt="header-img"
                src={props.imgsrc}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
