import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

export default function AdminLayout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f6f7f6",
        overflowX: "hidden"
      }}
    >
      <AdminSidebar />

      {/* Main content area */}
      <div
        style={{
          marginLeft: 240,
          padding: 40,
          width: "calc(100% - 240px)",
          boxSizing: "border-box"
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
