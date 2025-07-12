import { useState } from "react";
import { Mail, ArrowLeft, SendHorizonal } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can connect this to your backend password reset API
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50 px-4">
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back to login */}
        <button
          onClick={() => navigate("/login")}
          className="text-sm text-pink-500 flex items-center gap-1 mb-4 hover:text-pink-700 transition"
        >
          <ArrowLeft size={16} /> Back to Login
        </button>

        <div className="text-center mb-6">
          <motion.div
            className="inline-block p-4 bg-pink-100 rounded-full mb-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Mail className="text-pink-600" size={32} />
          </motion.div>
          <h2 className="text-2xl font-bold text-pink-700">Forgot Password</h2>
          <p className="text-pink-500 text-sm">We'll send you a reset link</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-pink-700 font-medium mb-1 flex gap-2 items-center">
                <Mail size={18} /> Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your registered email"
                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 text-pink-800"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full mt-4 py-2 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition"
            >
              <SendHorizonal size={16} className="inline mr-2" />
              Send Reset Link
            </motion.button>
          </form>
        ) : (
          <div className="text-center mt-4 text-pink-700 font-medium">
            📬 A password reset link has been sent to your email!
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
