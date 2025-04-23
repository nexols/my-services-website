import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DigitalMarketing from "./pages/DigitalMarketing";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import DigitalSolutions from "./pages/DigitalSolutions";
import Error from "./pages/Error";

const App = () => {
  // read saved theme or default to dark
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  // persist theme choice
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div
      className={`
        d-flex flex-column min-vh-100
        bg-${theme} text-${theme === "dark" ? "light" : "dark"}
      `}
    >
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="container flex-grow-1 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/digitalmarketing"
            element={<DigitalMarketing />}
          />
          <Route
            path="/softwaredevelopment"
            element={<SoftwareDevelopment />}
          />
          <Route
            path="/digitalsolutions"
            element={<DigitalSolutions />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
