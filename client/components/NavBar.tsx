"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Todo Max</h1>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="#" className="text-white text-lg hover:text-gray-300">
            LogIn
          </Link>
          <Link href="#" className="text-white text-lg hover:text-gray-300">
            SignUp
          </Link>
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* mobile navbar */}
        <div
          className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4 space-y-2`}
        >
          <Link href="#" className="block text-white hover:text-gray-300">
            Home
          </Link>
          <Link
            href="#"
            className="block text-white text-lg hover:text-gray-300"
          >
            LogIn
          </Link>
          <Link
            href="#"
            className="block text-white text-lg hover:text-gray-300"
          >
            SignUp
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
