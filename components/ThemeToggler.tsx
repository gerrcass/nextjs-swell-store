"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
    setIsActive(!isActive);
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Use a base64 image placeholder to prevent flickering and layout shifts
    // This example addresses layout shift only.
    return <div className="w-16 h-8 invisible scale-75 lg:scale-[none]"></div>;
  }

  return (
    <div
      onClick={toggleTheme}
      className="relative w-16 h-8 scale-75 lg:scale-[none] flex items-center dark:bg-gray-900 dark:border dark:border-white/30 bg-indigo-500 cursor-pointer rounded-full p-1"
    >
      <MoonIcon className="fill-white w-[15px] h-[15px]"></MoonIcon>
      <div
        className={` bg-white
        absolute  w-6 h-6 rounded-full shadow-customShadow-md ${
          isActive
            ? " transition-transform translate-x-0"
            : " transition-transform translate-x-8"
        }`}
      ></div>
      <SunIcon className="fill-white ml-auto w-[15px] h-[15px]"></SunIcon>
    </div>
  );
};

export default ThemeToggler;
