import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserPlus, Lock, Mail, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add real registration logic here
    login({ username: form.name });
    navigate("/");
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
            <UserPlus className="text-pink-600" size={32} />
          </motion.div>
          <h2 className="text-2xl font-bold text-pink-700">Create Account</h2>
          <p className="text-pink-500 text-sm">Join SweetBites Bakery Family!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-pink-700 font-medium flex items-center gap-2 mb-1">
              <User size={18} /> Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 text-pink-800"
            />
          </div>

          <div>
            <label className="text-sm text-pink-700 font-medium flex items-center gap-2 mb-1">
              <Mail size={18} /> Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 text-pink-800"
            />
          </div>

          <div>
            <label className="text-sm text-pink-700 font-medium flex items-center gap-2 mb-1">
              <Lock size={18} /> Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 text-pink-800"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full mt-4 py-2 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition"
          >
            Register
          </motion.button>
        </form>

        <p className="text-sm text-pink-600 text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-pink-800 font-medium cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
