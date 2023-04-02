import React from "react";
import "./card.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-sm-6 gy-4">
        <div className="card d-flex align-items-center">
          <img
            src={props.imgsrc}
            className="card-img-top"
            alt={props.imgsrc}
            style={{ width: "50px" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <NavLink to={props.link}>
              <button
                className="btn btn-outline-primary"
                style={{ transition: "0.5s" }}
              >
                Learn More
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
