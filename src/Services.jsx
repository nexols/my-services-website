import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
// import serviceImg from "./graphics/images/Banners/services.svg";
import "./service.css";

const Services = () => {
  return (
    <>
      <div className="container-fluid services_banner" id="services">
        <h1>Services</h1>
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
