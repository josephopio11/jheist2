"use client";

import { menuItems } from "@/components/constants/data";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Layers,
  LayoutDashboard,
  LineChart,
  LogOut,
  PlusCircle,
  Settings,
  Sliders,
  User,
  UserCog,
  Users2Icon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DashboardSidebar = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  if (!mounted) {
    setMounted(true);
  }

  return (
    <div
      id="main-nav"
      className="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 dark:bg-violet-950/50 border-r z-30 hidden"
    >
      <div className="w-full h-20 border-b flex px-4 items-center mb-8">
        <p className="font-semibold text-3xl text-blue-400 pl-4">
          {process.env.APP_NAME}
        </p>
      </div>
      <div className="w-full overflow-y-scroll">
        {menuItems.map(({ title, list }) => (
          <div key={title} className="mb-4 px-4">
            <p className="pl-4 text-sm font-semibold mb-1">{title}</p>
            {list.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className={cn(
                  "w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200/20 rounded-lg cursor-pointer",
                  { "bg-white/30": pathname === item.path }
                )}
              >
                {item.icon}
                <span className="text-gray-700 dark:text-white/80">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
