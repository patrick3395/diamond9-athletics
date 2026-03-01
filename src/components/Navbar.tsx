"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/pitching-plans", label: "Pitching Plans" },
  { href: "/hitting-plans", label: "Hitting Plans" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-amber-500 text-xl transition-transform group-hover:rotate-45 duration-300">
              ◆
            </span>
            <span className="text-white font-black tracking-wider text-lg">
              DIAMOND NINE
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Link
              href="/appointments"
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-2.5 rounded-sm text-sm tracking-wider transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 space-y-1 bg-zinc-950/95 border-t border-zinc-800/50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-sm text-sm font-medium tracking-wide transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/appointments"
            onClick={() => setIsOpen(false)}
            className="block mt-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-4 py-3 rounded-sm text-sm tracking-wider text-center transition-all"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </nav>
  );
}
