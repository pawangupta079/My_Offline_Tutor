import React from "react";


const About_Us = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-400 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Discover who we are, what we stand for, and how we’re making education accessible to everyone.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-screen-lg mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-gray-600 text-lg">
          We aim to bridge the gap between eager learners and passionate tutors. Our platform is dedicated to creating
          a supportive environment where students can thrive academically and tutors can share their expertise.
        </p>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-screen-lg mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/src/assets/pawan.jpg
                "
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Pawan Kumar Gupta</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/src/assets/suraj.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Suraj Saxena</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="/src/assets/pratyush.jpg"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Pratyush Ojha</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-screen-lg mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Values</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600">We embrace creativity to deliver the best learning solutions.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
            <p className="text-gray-600">We maintain transparency and trust in all our actions.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence</h3>
            <p className="text-gray-600">We strive for exceptional quality in everything we do.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
        <p className="text-lg mb-6">
          Whether you're a student looking to excel or a tutor eager to inspire, we have a place for you.
        </p>
        <button className="bg-white text-indigo-500 py-3 px-6 rounded-lg font-bold hover:bg-gray-100 transition">
          Learn More
        </button>
      </section>
    </div>
  );
};

export default About_Us;
