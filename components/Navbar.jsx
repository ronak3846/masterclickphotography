"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // hamburger + close icons

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
         MasterClick
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-gold transition"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg flex flex-col items-center gap-6 py-6 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-gray-300 transition"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
