import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
        <div className="max-w-screen-xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-5xl font-extrabold mb-4 animate-fade-in-down">
              Welcome to <span className="text-green-400">MyTutor</span>
            </h1>
            <p className="text-lg mb-6">
              Connecting students with the best tutors for personalized learning experiences. Start your journey today!
            </p>
            <div className="space-x-4">
              <button className=" text-black bg-yellow-400 text-black py-2 px-6 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
                Find a Tutor
              </button>
              <button className="bg-transparent border border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition duration-300">
                Become a Tutor
              </button>
            </div>
          </div>
          <div>
            <video controls autoPlay loop src="\src\assets\classroom-video.mov"></video>
            {/* <img
              src="https://via.placeholder.com/600x400"
              alt="Students and Tutors"
              className="rounded-lg shadow-lg animate-bounce"
            /> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Expert Tutors"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2  text-black">Expert Tutors</h3>
            <p className=' text-black'>Highly qualified tutors with expertise in various subjects.</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Flexible Learning"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-black">Flexible Learning</h3>
            <p className=' text-black'>Learn at your own pace with customized lessons and schedules.</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Affordable Rates"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2  text-black">Affordable Rates</h3>
            <p className=' text-black'>Quality education at prices that fit your budget.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20" >
        <h2 className="text-4xl font-bold text-center mb-10 text-black">
          What Our Students Say
        </h2>
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="mb-4 text-black">
              "MyTutor helped me ace my exams! The tutors are fantastic and really know their subjects."
            </p>
            <p className="text-right font-semibold text-black">- Student A</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="mb-4 text-black">
              "I love how flexible the schedule is. I can learn whenever it suits me!"
            </p>
            <p className="text-right font-semibold text-black">- Student B</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <p className="mb-4 text-black">
              "Affordable and effective. My child's grades have improved significantly!"
            </p>
            <p className="text-right font-semibold text-black">- Parent C</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to transform your learning journey?
          </h2>
          <button className="bg-yellow-400 text-black py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
