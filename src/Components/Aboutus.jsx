import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <section
        className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="text-lg md:text-xl mt-4">
            Discover Our Passion for Cars and Excellence
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="mt-4 text-gray-600">
          We are dedicated to providing car enthusiasts with the best insights,
          reviews, and experiences. Whether you're looking for the latest sports
          cars or timeless classics, we've got you covered.
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Team Member 1 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="John Doe"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="text-xl font-semibold mt-4">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Jane Smith"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
            <p className="text-gray-600">Chief Editor</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Mark Johnson"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="text-xl font-semibold mt-4">Mark Johnson</h3>
            <p className="text-gray-600">Car Enthusiast & Reviewer</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Join Our Community</h2>
        <p className="mt-4 text-lg">
          Stay updated with the latest car trends and news!
        </p>
        <Link to="/contact">
          <button className="mt-6 bg-red-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition duration-300">
            Contact Us
          </button>
        </Link>
      </section>
      <hr />
    </div>
  );
};

export default AboutUs;
