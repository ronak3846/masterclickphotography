"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        About Me
      </motion.h2>
      <p className="text-gray-300 leading-relaxed">
        I’m John Doe, a passionate photographer specializing in portraits,
        weddings, and lifestyle photography. My mission is to freeze emotions in
        frames and create timeless memories through my lens.
      </p>
    </div>
  );
}
