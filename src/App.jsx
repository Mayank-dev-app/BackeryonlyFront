import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Cart from "./components/pages/Cart";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import ForgotPassword from "./components/Auth/ForgetPassword";
import AdminLayout from "./AdminPannel";
import AdminDashboard from "./components/Auth/AdminDashboard";
import AdminProducts from "./components/Admin/AdminProduct";


function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  const WithFooterLayout = ({ children }) => (
    <>
      {children}
      <Footer />
    </>
  );

  return (
    <>
      {!isAdminPage && <Navbar />}

      <Routes>
        {/* Public + Protected Routes with Footer */}
        <Route path="/" element={<WithFooterLayout><Home /></WithFooterLayout>} />
        <Route path="/menu" element={<ProtectedRoute><WithFooterLayout><Menu /></WithFooterLayout></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><WithFooterLayout><About /></WithFooterLayout></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Admin Routes (Nested) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
