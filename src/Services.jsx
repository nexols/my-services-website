import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import serviceImg from "./graphics/images/Banners/services.svg";

const Services = () => {
  return (
    <>
      <div className="banner">
        <img className="w-100 p-0 m-0" src={serviceImg} sty alt="" />
      </div>
      <div className="container">
        <div className="row">
          {Sdata.map((val, ind) => {
            return (
              <Card
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                desc={val.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
