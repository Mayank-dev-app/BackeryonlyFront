import React from "react";
import { Cake, Star, Tag } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <motion.h2
        className="text-3xl font-bold text-center text-pink-700 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose SweetBites?
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <motion.div
          className="p-6 bg-pink-100 rounded-xl shadow hover:shadow-lg transition"
          whileHover={{ scale: 1.05 }}
        >
          <Cake size={40} className="mx-auto text-pink-700 mb-4" />
          <h3 className="text-xl font-semibold text-pink-800 mb-2 text-center">Freshly Baked</h3>
          <p className="text-center text-sm text-pink-700">
            We bake daily with premium ingredients to deliver freshness and flavor.
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-pink-100 rounded-xl shadow hover:shadow-lg transition"
          whileHover={{ scale: 1.05 }}
        >
          <Star size={40} className="mx-auto text-pink-700 mb-4" />
          <h3 className="text-xl font-semibold text-pink-800 mb-2 text-center">Top Rated</h3>
          <p className="text-center text-sm text-pink-700">
            Loved by thousands of customers and rated 5 stars across platforms.
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-pink-100 rounded-xl shadow hover:shadow-lg transition"
          whileHover={{ scale: 1.05 }}
        >
          <Tag size={40} className="mx-auto text-pink-700 mb-4" />
          <h3 className="text-xl font-semibold text-pink-800 mb-2 text-center">Custom Options</h3>
          <p className="text-center text-sm text-pink-700">
            Eggless? Vegan? Themed? We customize it just the way you love.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 bg-pink-50 rounded-xl p-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-2xl font-semibold text-pink-800 mb-2">What Customers Are Saying 💬</h3>
        <p className="text-pink-700 text-sm max-w-xl mx-auto">
          “Absolutely love their cupcakes! Always fresh, always delicious. I ordered a custom birthday cake for my daughter and it was both stunning and super tasty. Highly recommend SweetBites!” — Riya Sharma
        </p>
      </motion.div>
    </section>
  );
};

export default About;
