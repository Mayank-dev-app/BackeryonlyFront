import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { Lock, User, LogIn } from "lucide-react";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = formData;

    // Admin login check
    if (username === "admin@bakery.com" && password === "admin123") {
      login({ username, role: "admin" });
      navigate("/admin", { replace: true });
    }
    // Regular user
    else if (username && password) {
      login({ username, role: "user" });
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50 px-4">
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-6">
          <motion.div
            className="inline-block p-4 bg-pink-100 rounded-full mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <LogIn className="text-pink-600" size={32} />
          </motion.div>
          <h2 className="text-2xl font-bold text-pink-700">Welcome Back</h2>
          <p className="text-pink-500 text-sm">Please login to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-pink-700 font-medium flex items-center gap-2 mb-1">
              <User size={18} /> Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 text-pink-800"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label className="text-sm text-pink-700 font-medium flex items-center gap-2 mb-1">
              <Lock size={18} /> Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 text-pink-800"
              placeholder="Enter password"
              required
            />
          </div>

          <div className="flex justify-between text-sm text-pink-600">
            <Link to="/forgot-password" className="hover:underline">
              Forgot Password?
            </Link>
            <Link to="/register" className="hover:underline">
              Create Account
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-2 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
