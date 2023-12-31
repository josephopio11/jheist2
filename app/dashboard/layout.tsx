import React from "react";
import DashboardSidebar from "./_dashboard/Sidebar";
import TopNav from "./_dashboard/TopNav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="main-body" className="leading-normal tracking-normal">
      <div className="flex flex-wrap">
        <DashboardSidebar />
        <div
          id="main-content"
          className="w-full bg-gray-500/10 pl-0 lg:pl-64 min-h-screen"
        >
          <TopNav />
          <div className="p-6 bg-gray-500/10 mb-20">{children}</div>
          <div className="w-full border-t-2 px-8 py-6 lg:flex justify-between items-center">
            <p className="mb-2 lg:mb-0">© Copyright 2020</p>
            <div className="flex">
              <a href="#" className="mr-6 hover:text-gray-900">
                Terms of Service
              </a>
              <a href="#" className="mr-6 hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
