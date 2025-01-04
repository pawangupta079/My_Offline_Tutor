import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Find_a_Tutor from "./pages/Find_a_Tutor";
import Contact_Us from "./pages/Contact_Us";
import About_Us from "./pages/About_Us";
import Register_as_a_Tutor from "./pages/Register_as_a_Tutor";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-a-tutor" element={<Find_a_Tutor />} />
            <Route path="/contact-us" element={<Contact_Us />} />
            <Route path="/about-us" element={<About_Us />} />
            <Route path="/register-as-a-tutor" element={<Register_as_a_Tutor />} />
      </Routes>

      </main>

      <Footer />
    </div>
  );
};

export default App;
