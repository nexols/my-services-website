import React from "react";
import smile from "./graphics/smile.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigateBack = useNavigate();
  return (
    <>
      <div
        className="container text-center"
        style={{
          marginTop: "250px",
          marginBottom: "250px",
          fontSize: "35px",
        }}
      >
        Under Construction!
        <img
          src={smile}
          style={{ width: "30px", marginLeft: "13px" }}
          alt="smile"
        />{" "}
        <br />
        <button
          className="btn btn-outline-primary"
          onClick={() => navigateBack("/")}
          style={{ transition: "0.5s" }}
        >
          Go back
        </button>
      </div>
    </>
  );
};

export default Error;
