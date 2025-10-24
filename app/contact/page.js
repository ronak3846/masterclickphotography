"use client";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden px-6 py-20 flex flex-col items-center justify-center">
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/30 blur-3xl rounded-full"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-8"
      >
        Let’s Connect on WhatsApp
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-300 max-w-2xl text-center mb-12"
      >
        Have a question, want to book a shoot, or collaborate? Chat with me
        instantly on WhatsApp — I usually reply within minutes.
      </motion.p>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl max-w-3xl w-full flex flex-col md:flex-row gap-10 items-center justify-between"
      >
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-64">
          <Image
            src="/images/contact-photo.jpg"
            alt="Contact Photography"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start justify-center md:w-1/2 space-y-4">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-green-400" />
            <span className="text-gray-300">+91 6350669652</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-400" />
            <span className="text-gray-300">ajayvaishnavudr@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-purple-400" />
            <span className="text-gray-300">Delhi Gate, Udaipur, India</span>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919887165654?text=Hi%20Ajay!%20I%20want%20to%20book%20a%20photoshoot."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-400 to-green-600 text-white py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <FaWhatsapp size={24} />
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>

      {/* Secondary Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-20 text-center"
      >
        <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Prefer Email Instead?
        </h3>
        <p className="text-gray-400">
          Drop me a line at{" "}
          <span className="text-white font-semibold">
            ajayvaishnavudr@gmail.com
          </span>
          and I’ll get back to you soon.
        </p>
      </motion.div>
    </div>
  );
}
