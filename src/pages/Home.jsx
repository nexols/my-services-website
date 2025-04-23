import React from "react";
import Common from "../components/Common";
import homeimg from "../assets/images/coding.png";

const Home = () => (
  <Common
    name="Revolutionize your business with "
    highlight="CrunkDevs"
    secHead=" where technology meets ingenuity!"
    imgsrc={homeimg}
    visit="/contact"
    btnname="Get a quote"
  />
);

export default Home;
