// DashboardPage.tsx
import { Outlet } from "react-router-dom";
import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "../Navbar/Navbar";


const DashboardPage = () => {
  return (
    <SidebarProvider>
      <div
       style={{
          backgroundImage: "url('/images/bgImage.png')", 
        }}
         className="flex w-full">
        <AppSidebar />

       
        <main className="flex-1 p-4">
         <div className="">
           <Navbar></Navbar>
         </div>
          <Outlet /> 
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardPage;
