import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar-man/Navbar.jsx";
import Footer from "./Footer/FooterMan.jsx";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contactus";  
import Disclaimer from "./Pages/Disclimer";

function App() {

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />  
        <Route path="/disclaimer" element={<Disclaimer />} />

      </Routes>

      <Footer />

    </>
  );

}

export default App;