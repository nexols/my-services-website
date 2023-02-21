import React from "react";
import Button from "@mui/material/Button";
import "./home.css";
import services from "../src/graphics/services.webm";

const Home = () => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="col-lg-6 pt-5">
                <h1>
                  Grow your business with{" "}
                  <strong className="name-strong">XYZ Company</strong>
                </h1>
                <h2 className="my-3">
                  We are a team of talented developers making websites
                </h2>
                <div className="my-5">
                  <Button variant="outlined">Get Started</Button>
                </div>
                <div className="col-lg-6">
                  <img src={services}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
