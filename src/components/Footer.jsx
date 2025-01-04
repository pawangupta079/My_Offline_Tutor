import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer Top */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              We connect students with highly skilled tutors for personalized home tuition. Our mission is to make learning accessible and efficient for every student.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-green-500">Home</a></li>
              <li><a href="/find-tutor" className="text-gray-400 hover:text-green-500">Find a Tutor</a></li>
              <li><a href="/register-tutor" className="text-gray-400 hover:text-green-500">Register as a Tutor</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-green-500">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-green-500">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><i className="fas fa-phone-alt"></i> +91 9305343440</li>
              <li><i className="fas fa-envelope"></i> pg777869@gmail.com</li>
              <li><i className="fas fa-map-marker-alt"></i> India</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-green-700 pt-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.facebook.com/profile.php?id=100054190324372" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/pawan-kumar-gupta-592463254/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.instagram.com/pawan_g79/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MyTutor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
