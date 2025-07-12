import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="pt-24 px-4 min-h-screen bg-pink-50">
      <Outlet />
    </div>
  );
};

export default AdminLayout;