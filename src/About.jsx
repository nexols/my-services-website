import React from "react";
import Common from "./Common";
import abtimg from "../src/graphics/images/about.png";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={abtimg}
        visit="/services"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
