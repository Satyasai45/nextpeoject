"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else if (stored === "light") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      }
    }
  }, []);

  const toggle = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <div className="flex justify-between items-center p-4 bg-violet-500 dark:bg-lightblack-900 transition-colors duration-200">
      <div className="flex justify-between items-center gap-4">
        <Link href="/" className="text-black dark:text-white text-2xl font-bold hover:text-white transition-colors duration-200">Home</Link>
        <Link href="/services" className="text-black dark:text-white text-2xl font-bold hover:text-white transition-colors duration-200">Services</Link>
        <Link href="/about" className="text-black dark:text-white text-2xl font-bold hover:text-white transition-colors duration-200">About</Link>
        <Link href="/contact" className="text-black dark:text-white text-2xl font-bold hover:text-white transition-colors duration-200">Contact</Link>
      </div>
      <div className="flex justify-between items-center gap-4">
        <Link href="/login" className="text-black dark:text-white text-2xl font-bold hover:text-white transition-colors duration-200">Login</Link>
        <Link href="/register" className="text-black dark:text-white text-2xl font-bold hover:text-white transition-colors duration-200">Register</Link>
       
        <button
          onClick={toggle}
          aria-label="Toggle dark mode"
          className="ml-2 p-2 rounded bg-white dark:bg-gray-800 text-black dark:text-white transition-colors duration-200"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
}
