import React, { useState } from "react";

const Register_as_a_Tutor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subjects: '',
    location: '',
    rate: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Display the form data in console (you can replace this with an API call to save the data)
    console.log('Form Data Submitted:', formData);

    // Optionally, reset the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subjects: '',
      location: '',
      rate: '',
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Join Us as a Tutor</h1>
        <p className="text-lg">
          Share your knowledge and help students achieve their academic goals. Sign up to become a tutor today!
        </p>
      </section>

      {/* Registration Form Section */}
      <section className="max-w-screen-md mx-auto bg-white p-8 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Register Your Details
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-black"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-black"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-black"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Subjects */}
          <div>
            <label htmlFor="subjects" className="block text-gray-700 mb-2">
              Subjects You Can Teach
            </label>
            <input
              type="text"
              id="subjects"
              name="subjects"
              value={formData.subjects}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-black"
              placeholder="E.g., Mathematics, Science, English"
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-black"
              placeholder="Enter your city or area"
            />
          </div>

          {/* Hourly Rate */}
          <div>
            <label htmlFor="rate" className="block text-gray-700 mb-2 ">
              Hourly Rate (in ₹)
            </label>
            <input
              type="number"
              id="rate"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-black"
              placeholder="Enter your hourly rate"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition"
          >
            Register Now
          </button>
        </form>
      </section>

      {/* Why Join Section */}
      <section className="bg-gray-100 py-12 mt-8">
        <div className="max-w-screen-lg mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Join Our Platform?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Flexible Schedule
              </h3>
              <p className="text-gray-600">
                Teach when it’s convenient for you, whether part-time or full-time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Competitive Rates
              </h3>
              <p className="text-gray-600">
                Set your own rates and earn money doing what you love.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Impact Lives
              </h3>
              <p className="text-gray-600">
                Help students excel and reach their potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Share Your Knowledge?
        </h2>
        <p className="mb-6">
          Join our growing community of tutors and start making a difference today.
        </p>
        <button className="bg-yellow-400 text-black py-3 px-8 rounded-lg font-bold hover:bg-yellow-500 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Register_as_a_Tutor;
