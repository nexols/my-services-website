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
import Dm from "./services/Dm";
import Techsols from "./services/Techsols";
import Sd from "./services/Sd";

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
        <Route path="/digitalmarketing" element={<Dm />} />
        <Route path="/softwaredevelopment" element={<Sd />} />
        <Route path="/solutions" element={<Techsols />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
