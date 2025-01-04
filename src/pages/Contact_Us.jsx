import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Contact_Us = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg">
          Have questions or need support? We’re here to help. Contact us today!
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-screen-md mx-auto bg-white p-8 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Enter your email address"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="What is your inquiry about?"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Other Contact Options */}
      <section className="bg-gray-100 py-12 mt-8">
        <div className="max-w-screen-lg mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Other Ways to Reach Us
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Phone */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600">+91 9305343440</p>
            </div>
            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Email Us
              </h3>
              <p className="text-gray-600">pg777869@gmail.com</p>
            </div>
            {/* Address */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Visit Us
              </h3>
              <p className="text-gray-600">
                Greater Noida, Pari Chowk (Crown Hostel)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="bg-gradient-to-r  to-blue-500 text-white py-8 text-center">
         <h1 className="text-black text-bold text-3xl font-bold">Know More About Us😊</h1>
         <div className=" text-center">
                  <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://www.facebook.com/profile.php?id=100054190324372" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
                      <FontAwesomeIcon icon={faFacebookF} className="text-3xl"/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
                      <FontAwesomeIcon icon={faTwitter} className="text-3xl"/>
                    </a>
                    <a href="https://www.linkedin.com/in/pawan-kumar-gupta-592463254/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
                      <FontAwesomeIcon icon={faLinkedinIn} className="text-3xl"/>
                    </a>
                    <a href="https://www.instagram.com/pawan_g79/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
                      <FontAwesomeIcon icon={faInstagram} className="text-3xl"/>
                    </a>
                  </div>
                  
                </div>
      </section>
    </div>
  );
};

export default Contact_Us;
