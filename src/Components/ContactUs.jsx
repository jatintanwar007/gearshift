import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-black text-white text-center py-10">
        <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
        <p className="text-gray-300 mt-2">We’d love to hear from you!</p>
      </div>

      <section className="max-w-5xl mx-auto my-10 p-6 grid grid-cols-1 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-zinc-500 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Get In Touch
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="w-full bg-black hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="max-w-5xl mx-auto my-10 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Find Us Here
        </h3>
        <iframe
          title="Google Map"
          className="w-full h-64 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d222.392297170238!2d75.8163076998308!3d26.894710503856025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1740980457102!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;
