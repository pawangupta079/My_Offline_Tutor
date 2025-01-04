import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 py-3 md:px-10">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">MyTutor</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-green-600">Home</Link>
          <Link to="/find-a-tutor" className="text-gray-800 hover:text-green-600">Find a Tutor</Link>
          <Link to="/register-as-a-tutor" className="text-gray-800 hover:text-green-600">Register as a Tutor</Link>
          <Link to="/about-us" className="text-gray-800 hover:text-green-600">About Us</Link>
          <Link to="/contact-us" className="text-gray-800 hover:text-green-600">Contact Us</Link>
        </nav>

        {/* Login/Register Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-gray-800 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300">Login</Link>
          <Link to="/register" className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600">Register</Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden flex flex-col justify-center items-center focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white py-4 px-4 space-y-4`}>
        <Link to="/" className="block text-gray-800 hover:text-green-600" onClick={closeMobileMenu}>Home</Link>
        <Link to="/find-a-tutor" className="block text-gray-800 hover:text-green-600" onClick={closeMobileMenu}>Find a Tutor</Link>
        <Link to="/register-as-a-tutor" className="block text-gray-800 hover:text-green-600" onClick={closeMobileMenu}>Register as a Tutor</Link>
        <Link to="/about-us" className="block text-gray-800 hover:text-green-600" onClick={closeMobileMenu}>About Us</Link>
        <Link to="/contact-us" className="block text-gray-800 hover:text-green-600" onClick={closeMobileMenu}>Contact Us</Link>
        <Link to="/login" className="block text-gray-800 hover:text-green-600" onClick={closeMobileMenu}>Login</Link>
        <Link to="/register" className="block text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600" onClick={closeMobileMenu}>Register</Link>
      </div>
    </header>
  );
};

export default Navbar;
