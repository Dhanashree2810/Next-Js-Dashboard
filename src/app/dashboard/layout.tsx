import type { ReactNode } from "react";
import { SidebarPage } from "../Sidebar";
import NavbarPage from "../Navbar";
const DashboardLayout = ({
  blogs,
  profile,
  children
}: {
  blogs: ReactNode;
  profile: ReactNode;
  children: React.ReactNode;
}) => {
  console.log("Dashboard Layout");

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SidebarPage />
      <div className="flex flex-col ">
        <NavbarPage />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}

        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
