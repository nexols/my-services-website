import React from "react";
import smile from "./graphics/smile.png";

const Error = () => {
  return (
    <>
      <div
        className="text-center"
        style={{
          marginTop: "250px",
          marginBottom: "300px",
          fontSize: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Under Construction!{" "}
        <img src={smile} style={{ width: "30px", marginLeft: "13px" }} />
      </div>
    </>
  );
};

export default Error;
