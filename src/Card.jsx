import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 ">
        <div
          className="card d-flex align-items-center pt-4"
          style={{ width: "18rem" }}
        >
          <img
            src={props.imgsrc}
            className="card-img-top w-25"
            alt={props.imgsrc}
          />
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">{props.title}</h5>
            <p className="card-text">
              Some quick example text to for the service.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
