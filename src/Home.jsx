import React from "react";
import Common from "./Common";
import homeimg from "../src/graphics/images/coding.png";

const Home = () => {
  return (
    <>
      <Common
        name="Revolutionize your business with "
        secHead=" where technology meets ingenuity!"
        imgsrc={homeimg}
        visit="/services"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
