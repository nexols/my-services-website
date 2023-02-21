import React from "react";
import Common from "./Common";
import servimg from "../src/graphics/services.png";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={servimg}
        visit="/contact"
        btnname="Contact Us"
      />
    </>
  );
};

export default Home;
