"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Artistly Logo"
            width={150}
            height={150}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm sm:text-base">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/artists" className="hover:underline">
            Artists
          </Link>
          <Link href="/onboard" className="hover:underline">
            Onboard Artist
          </Link>
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Slide Down Menu */}
      <div
        className={`md:hidden fixed top-20 right-0 w-50 h-screen px-6 py-4 space-y-4 shadow-md rounded-l-lg z-40 transform transition-transform duration-300 ease-in-out bg-[#EBECE1] text-gray-900 border-l border-gray-200`}
        style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <Link
          href="/"
          className="block hover:underline"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/artists"
          className="block hover:underline"
          onClick={() => setIsOpen(false)}
        >
          Artists
        </Link>
        <Link
          href="/onboard"
          className="block hover:underline"
          onClick={() => setIsOpen(false)}
        >
          Onboard Artist
        </Link>
        <Link
          href="/dashboard"
          className="block hover:underline"
          onClick={() => setIsOpen(false)}
        >
          Dashboard
        </Link>
      </div>
    </>
  );
}
