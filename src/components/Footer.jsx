import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-pink-800 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">SweetBites Bakery</h3>
          <p className="text-sm">
            Delicious handcrafted treats made with love in every bite. We serve joy one pastry at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p className="text-sm">Email: support@sweetbites.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
          <p className="text-sm">Address: 123 Bakery Lane, Delhi</p>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-pink-700 hover:text-pink-800" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-pink-700 hover:text-pink-800" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-pink-700 hover:text-pink-800" />
            </a>
            <a href="mailto:support@sweetbites.com">
              <Mail className="text-pink-700 hover:text-pink-800" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-pink-600 mt-10">
        &copy; {new Date().getFullYear()} SweetBites Bakery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
