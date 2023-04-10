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
        visit="/contact"
        btnname="Get a quote"
      />
    </>
  );
};

export default Home;
