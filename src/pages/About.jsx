import React from "react";
import Common from "../components/Common";
import aboutImg from "../assets/images/about.png";

const About = () => (
  <Common
    name="Grow your business with"
    highlight="CrunkDevs"
    secHead="— where innovation drives success!"
    imgsrc={aboutImg}
    visit="/contact"
    btnname="Get Started"
  />
);

export default About;
