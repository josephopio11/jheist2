"use client";

import { useTheme } from "next-themes";

import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Tabs
      defaultValue={theme}
      className="fixed bottom-5 right-5 bg-white  bg-opacity-80 backdrop-blur-[0.5rem] border  border-opacity-40 shadow-xl shadow-black/70 rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 z-[10000000]"
    >
      <TabsList className="border">
        {/* {theme !== "light" && ( */}
        <>
          <TabsTrigger value="light" onClick={() => setTheme("light")}>
            <SunIcon className="h-6 w-6" />
          </TabsTrigger>
        </>
        {/* )} */}
        {/* {theme === "light" && ( */}
        <>
          {" "}
          <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
            <MoonIcon className="h-6 w-6" />
          </TabsTrigger>
        </>
        {/* )} */}

        <TabsTrigger value="system" onClick={() => setTheme("system")}>
          <DesktopIcon className="h-6 w-6" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
