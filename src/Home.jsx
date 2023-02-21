import React from "react";
import Common from "./Common";
import homeimg from "../src/graphics/coding.png";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={homeimg}
        visit="/services"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
