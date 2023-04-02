import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import serviceImg from "./graphics/images/Banners/services.svg";
import "./service.css";

const Services = () => {
  return (
    <>
      <div className="service-banner">
        <img className="w-100 p-0 m-0" src={serviceImg} alt="" />
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
                link={val.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
