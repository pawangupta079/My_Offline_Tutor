import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import Find_a_Tutor from "./pages/Find_a_Tutor";
import Contact_Us from "./pages/Contact_Us";
import About_Us from "./pages/About_Us";
import Register_as_a_Tutor from "./pages/Register_as_a_Tutor";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
      </Routes>

      <div className="flex space-x-4">
        <Link to="/login" className="text-gray-800 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">Login</Link>
        <Link to="/signup" className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600">Sign Up</Link>
      </div>

      </main>

      <Footer />
    </div>
  );
};

export default App;
