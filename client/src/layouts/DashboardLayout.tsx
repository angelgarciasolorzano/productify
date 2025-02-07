import { Outlet } from "react-router-dom";

import { HeaderDashboard } from "../components/header";

import Sidebar from "../components/sidebar";

function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden min-h-screen">
        <HeaderDashboard />
        
        <main className="flex-1 relative overflow-y-auto min-h-0 overflow-x-hidden scrollbar-thin 
          dark:scrollbar-thumb-gray-500 dark:scrollbar-track-dark-720"
        >
          <div className="w-full flex justify-center px-4 py-4 min-h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout;