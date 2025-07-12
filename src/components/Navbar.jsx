import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  ShoppingCart,
  BookOpen,
  Phone,
  Cake
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Menu", path: "/menu", icon: <Cake size={18} /> },
    { name: "About", path: "/about", icon: <BookOpen size={18} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={18} /> },
    { name: "Cart", path: "/cart", icon: <ShoppingCart size={18} /> },
  ];

  return (
    <nav className="bg-pink-50 shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-pink-700 tracking-wide flex items-center gap-2"
        >
          🍰 SweetBites
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-pink-800 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="flex items-center gap-1 hover:text-pink-600 transition duration-200"
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-pink-100 px-4 pb-4">
          <ul className="flex flex-col gap-4 text-pink-800 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 py-2 px-2 rounded hover:bg-pink-200"
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

