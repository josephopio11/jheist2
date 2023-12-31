import {
  Briefcase,
  Layers,
  LayoutDashboard,
  LineChart,
  LogOut,
  PlusCircle,
  Settings,
  UserCog,
  Users2Icon,
} from "lucide-react";

export const menuItems = [
  {
    title: "MAIN",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <LayoutDashboard className="h-6 w-6 mr-2" />,
      },
      {
        title: "Analytics",
        path: "/dashboard/analytics",
        icon: <LineChart className="h-6 w-6 mr-2" />,
      },
      {
        title: "Categories",
        path: "/dashboard/categories",
        icon: <Briefcase className="h-6 w-6 mr-2" />,
      },
    ],
  },
  {
    title: "POSTS",
    list: [
      {
        title: "Add Post",
        path: "/dashboard/posts/add",
        icon: <PlusCircle className="h-6 w-6 mr-2" />,
      },
      {
        title: "All Posts",
        path: "/dashboard/posts",
        icon: <Layers className="h-6 w-6 mr-2" />,
      },
      {
        title: "Categories",
        path: "/dashboard/categories",
        icon: <Briefcase className="h-6 w-6 mr-2" />,
      },
    ],
  },
  {
    title: "ADMIN",
    list: [
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <Users2Icon className="h-6 w-6 mr-2" />,
      },
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <Settings className="h-6 w-6 mr-2" />,
      },
    ],
  },
  {
    title: "ACCOUNT",
    list: [
      {
        title: "Profile",
        path: "/dashboard/profile",
        icon: <UserCog className="h-6 w-6 mr-2" />,
      },
      {
        title: "Logout",
        path: "/logout",
        icon: <LogOut className="h-6 w-6 mr-2" />,
      },
    ],
  },
];
