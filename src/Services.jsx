import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Services = () => {
  return (
    <>
      <div>
        <h1 className="text-center mt-5" style={{ color: "#1976d2" }}>
          Our Sevices
        </h1>
      </div>
      <div className="container">
        <div className="row">
          {Sdata.map((val, ind) => {
            return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
