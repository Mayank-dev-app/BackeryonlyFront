import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowAlert(true);
      setTimeout(() => {
        setRedirect(true);
      }, 2000); // wait 2 seconds before redirect
    }
  }, [isAuthenticated]);

  if (redirect) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!isAuthenticated && showAlert) {
    return (
      <div className="relative">
        <div className="fixed inset-0 backdrop-blur-sm bg-black/20 z-40" />
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold text-pink-700 mb-2">
              🔐 Protected Route
            </h2>
            <p className="text-pink-600">Please login to access this page.</p>
          </div>
        </div>
        {/* Still rendering children behind the blur */}
        <div className="pointer-events-none select-none blur-sm">
          {children}
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
