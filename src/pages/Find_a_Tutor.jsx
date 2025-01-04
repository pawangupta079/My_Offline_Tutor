import React from 'react';

const Find_a_Tutor = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Find Your Perfect Tutor</h1>
          <p className="text-lg mb-6">
            Private tutors that fit your schedule. Arrange a free video meeting, then book one-to-one online lessons tailored to your needs.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="bg-white p-6 shadow-md rounded-lg flex flex-wrap gap-4 items-center">
          <div className="flex-grow">
            <label className="block text-gray-700 mb-1">Subject</label>
            <select className="w-full border border-gray-300 rounded-lg py-2 px-4 text-black ">
              <option>All Subjects</option>
              <option>Math</option>
              <option>Science</option>
              <option>English</option>
            </select>
          </div>
          <div className="flex-grow">
            <label className="block text-gray-700 mb-1">Level</label>
            <select className="w-full border border-gray-300 rounded-lg py-2 px-4 text-black">
              <option>All Levels</option>
              <option>Primary</option>
              <option>Secondary</option>
              <option>University</option>
            </select>
          </div>
          <div className="flex-grow">
            <label className="block text-gray-700 mb-1">Price Range</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 text-black"
              placeholder="e.g., £20 - £50"
            />
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Apply Filters
          </button>
        </div>
      </section>

      {/* Tutors List */}
      <section className="max-w-screen-xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Top Tutors</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tutor Card */}
          {[
            {
              name: 'Abdul bari Sir',
              location: 'Newcastle - Psychology BSc Honours (Bachelors)',
              description: 'Motivated to help and encourage understanding and improvement. Lessons are always productive and constructive.',
              price: '£25-£27 /hr',
              reviews: 27,
              rating: 5,
              lessons: 205,
              image: '/src/assets/image1.png',
            },
            {
              name: 'Harkirat Sir',
              location: 'Southampton - Marine Biology with Oceanography (Integrated Masters)',
              description: 'Recent graduate passionate about helping students achieve success in science.',
              price: '£25-£27 /hr',
              reviews: 2,
              rating: 5,
              lessons: 15,
              image: '/src/assets/image2.png',
            },
          ].map((tutor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-center text-gray-900 mb-2">
                {tutor.name}
              </h3>
              <p className="text-sm text-center text-gray-500 mb-4">{tutor.location}</p>
              <p className="text-gray-700 mb-4">{tutor.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-blue-500">{tutor.price}</span>
                <span>{tutor.reviews} reviews</span>
              </div>
              <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">FAQs</h2>
          <ul className="space-y-4 text-black">
            {[
              'What makes a good tutor?',
              'Which tutor is right for you?',
              'Why is online tutoring important?',
              'How much does a tutor cost?',
              'How do online lessons work?',
            ].map((faq, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50 transition"
              >
                {faq}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need help finding the perfect tutor?
          </h2>
          <p className="mb-6">Our experts are here to guide you.</p>
          <button className="bg-yellow-400 text-black py-3 px-8 rounded-lg hover:bg-yellow-500 transition">
            Find Me a Tutor
          </button>
        </div>
      </section>
    </div>
  );
};

export default Find_a_Tutor;
