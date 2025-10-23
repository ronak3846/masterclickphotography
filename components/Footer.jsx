"use client";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        {/* Brand & Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            MasterClick Photography
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Capturing your most beautiful moments with creativity, emotion, and
            artistry. Let us turn your memories into timeless stories through
            the lens.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "Services", href: "/services" },
              { name: "Contact", href: "/contact" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="hover:text-white transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact Info
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-purple-400" />{" "}
              ajayvaishnavudr@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-400" /> +91 6350669652
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-purple-400" /> Delhi gate ,
              Udaipur , India
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6">
            <a
              href="https://www.instagram.com/master_click08?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="text-gray-400 hover:text-pink-500 transition-all duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-gray-500 mt-8 text-sm"
      >
        © {new Date().getFullYear()} MasterClick Photography. All rights
        reserved.
      </motion.div>
    </footer>
  );
}
