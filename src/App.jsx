import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Services from "./Services";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid mx-auto col-10">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
