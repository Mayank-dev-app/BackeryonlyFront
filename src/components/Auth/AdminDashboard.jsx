import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cake, Users, ShoppingCart, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6 md:p-10 pt-40">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-pink-700 flex items-center gap-3">
          <Cake size={28} /> Admin Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stats Card */}
        <Link to="/admin/products">
          <motion.div
            className="bg-white shadow-md rounded-xl p-6 text-center cursor-pointer hover:bg-pink-50"
            whileHover={{ scale: 1.03 }}
          >
            <Cake className="text-pink-600 mx-auto mb-3" size={36} />
            <h2 className="text-lg font-semibold text-pink-800">Total Products</h2>
            <p className="text-2xl font-bold text-pink-700">28</p>
          </motion.div>
        </Link>


        <motion.div
          className="bg-white shadow-md rounded-xl p-6 text-center"
          whileHover={{ scale: 1.03 }}
        >
          <Users className="text-pink-600 mx-auto mb-3" size={36} />
          <h2 className="text-lg font-semibold text-pink-800">Users</h2>
          <p className="text-2xl font-bold text-pink-700">125</p>
        </motion.div>

        <motion.div
          className="bg-white shadow-md rounded-xl p-6 text-center"
          whileHover={{ scale: 1.03 }}
        >
          <ShoppingCart className="text-pink-600 mx-auto mb-3" size={36} />
          <h2 className="text-lg font-semibold text-pink-800">Orders</h2>
          <p className="text-2xl font-bold text-pink-700">56</p>
        </motion.div>
      </div>

      <div className="mt-12 text-sm text-gray-500 text-center">
        Logged in as <span className="text-pink-600 font-medium">{user?.username}</span>
      </div>
    </div>
  );
};

export default AdminDashboard;
