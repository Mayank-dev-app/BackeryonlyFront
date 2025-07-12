import { Link } from "react-router-dom";
import { ShoppingCart, Cake, Star, Phone, Info } from "lucide-react";
import { motion } from "framer-motion";
import {cupCake , TruffleCake } from '../../assets/image';

const Home = () => {
    return (
        <div className="bg-pink-50 min-h-screen pt-20">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
                <motion.div
                    className="md:w-1/2 mb-10 md:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-pink-700 leading-tight mb-4">
                        Welcome to SweetBites Bakery
                    </h1>
                    <p className="text-pink-800 text-lg mb-6">
                        Freshly baked with love – discover our delicious cakes, pastries, and desserts!
                    </p>
                    <Link
                        to="/menu"
                        className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                    >
                        Browse Menu
                    </Link>
                </motion.div>

                <motion.div
                    className="relative w-full md:w-1/2 h-96 rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
                        alt="Bakery"
                        className="w-full h-full object-cover"
                    />

                    {/* Text Overlay with Light Opacity */}
                    <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white text-center p-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">Made with Passion</h2>
                        <p className="text-lg md:text-xl max-w-md drop-shadow-sm">
                            Every bite tells a story of sweetness and love.
                        </p>
                    </div>
                </motion.div>

            </div>


            {/* About Section */}
            <motion.div
                className="bg-white py-12 px-6 md:px-16 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-3xl font-bold text-pink-700 mb-6 flex justify-center items-center gap-2">
                    <Info size={28} /> About Us
                </h2>
                <p className="text-pink-800 max-w-3xl mx-auto text-lg">
                    At SweetBites Bakery, we believe every celebration deserves a delicious centerpiece. Our passion lies in crafting freshly baked cakes, cookies, and breads using the finest ingredients. Whether it's a birthday, wedding, or just a sweet craving, our treats are made to make your moments memorable.
                </p>
            </motion.div>

            {/* Menu Highlights */}
            <motion.div
                className="bg-pink-100 py-12 px-6 md:px-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-3xl font-bold text-center text-pink-700 mb-10">
                    Featured Menu
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Chocolate Truffle Cake",
                            img: TruffleCake,
                        },
                        {
                            name: "Fruit Tart",
                            img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
                        },
                        {
                            name: "Cupcakes Mix",
                            img: cupCake,
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-pink-800">
                                    {item.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Features Section */}
            <div className="bg-white py-12 px-6 md:px-16">
                <h2 className="text-3xl font-bold text-center text-pink-700 mb-10">
                    Why Choose Us?
                </h2>
                <div className="grid md:grid-cols-3 gap-10 text-center">
                    <motion.div
                        className="p-6 bg-pink-100 rounded-xl shadow hover:shadow-lg transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Cake size={40} className="mx-auto text-pink-700 mb-4" />
                        <h3 className="text-xl font-semibold text-pink-800 mb-2">Delicious Cakes</h3>
                        <p>Hand-crafted, fresh, and flavorful cakes for every occasion.</p>
                    </motion.div>

                    <motion.div
                        className="p-6 bg-pink-100 rounded-xl shadow hover:shadow-lg transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Star size={40} className="mx-auto text-pink-700 mb-4" />
                        <h3 className="text-xl font-semibold text-pink-800 mb-2">5-Star Quality</h3>
                        <p>Premium ingredients and top-tier baking by expert chefs.</p>
                    </motion.div>

                    <motion.div
                        className="p-6 bg-pink-100 rounded-xl shadow hover:shadow-lg transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        <ShoppingCart size={40} className="mx-auto text-pink-700 mb-4" />
                        <h3 className="text-xl font-semibold text-pink-800 mb-2">Easy Ordering</h3>
                        <p>Order online in seconds with fast and friendly delivery.</p>
                    </motion.div>
                </div>
            </div>

            {/* Call to Action Section */}
            <motion.div
                className="bg-pink-200 py-10 text-center px-6 md:px-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h3 className="text-3xl font-bold text-pink-800 mb-4">Have Questions?</h3>
                <p className="text-lg text-pink-700 mb-6">
                    Contact us for custom cakes, event orders, or anything sweet!
                </p>
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                    <Phone size={20} /> Contact Us
                </Link>
            </motion.div>
        </div>
    );
};

export default Home;
