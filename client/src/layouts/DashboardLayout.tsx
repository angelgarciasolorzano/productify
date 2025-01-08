import { Outlet } from "react-router-dom";

import { HeaderDashboard } from "../components/header";

import Sidebar from "../components/sidebar";

function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <HeaderDashboard />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout;