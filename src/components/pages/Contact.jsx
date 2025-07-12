import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 bg-pink-50 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">
          📞 Contact Us
        </h2>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-pink-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-pink-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            <div>
              <label className="block text-pink-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border border-pink-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-pink-700 font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="What's this about?"
              className="w-full border border-pink-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div>
            <label className="block text-pink-700 font-medium mb-1">
              Message
            </label>
            <textarea
              placeholder="Type your message here..."
              rows="5"
              className="w-full border border-pink-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
