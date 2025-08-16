// DashboardPage.tsx
import { Outlet } from "react-router-dom";
import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "../Navbar/Navbar";

const DashboardPage = () => {
  return (
    <SidebarProvider>
      <div
        className="flex w-screen min-h-screen bg-no-repeat bg-cover bg-top"
        style={{ backgroundImage: "url('/images/bgImage.png')" }}
      >
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content */}
        <main className="flex-1 flex flex-col min-h-screen overflow-auto p-4">
          {/* Navbar */}
          <Navbar />

          {/* Page content */}
          <div className="flex-1">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardPage;
