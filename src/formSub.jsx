import React from "react";
import { useNavigate } from "react-router-dom";

const Submitted = () => {
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
        Your form has been sumitted 😀. Thank you for your time! <br />
        <button
          className="btn btn-outline-primary mt-4"
          onClick={() => navigateBack("/")}
          style={{ transition: "0.5s" }}
        >
          Back to main
        </button>
      </div>
    </>
  );
};

export default Submitted;
