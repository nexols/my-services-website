import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Services from "./Services";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
import Error from "./Error";
import Submitted from "./formSub";

const App = () => {
  return (
    <>
    
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="/my-services-website" element={<Home />} />
        </Route>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/formSub" element={<Submitted />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
