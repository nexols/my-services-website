import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Services = () => {
  return (
    <>
      <div>
        <h1 className="text-center mt-5">Our Sevices</h1>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
