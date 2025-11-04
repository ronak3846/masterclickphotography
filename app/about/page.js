"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6 text-gold"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto"
      >
        I’m <span className="text-gold font-semibold">Ajay Vaishnav</span>, a
        passionate photographer with over{" "}
        <span className="text-gold font-semibold">15 years of experience</span>{" "}
        capturing life’s most beautiful moments. Based in{" "}
        <span className="text-gold font-semibold">Udaipur, Rajasthan</span>, I
        specialize in wedding, portrait, and event photography — turning real
        emotions into timeless frames.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-gray-400 leading-relaxed text-lg max-w-3xl mx-auto mt-6"
      >
        With a creative eye and deep understanding of light and composition, my
        work blends art with storytelling. Whether it’s a grand wedding,
        intimate portrait, or candid celebration, I believe every photo should
        speak your story — naturally and beautifully.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="text-gray-400 leading-relaxed text-lg max-w-3xl mx-auto mt-6"
      >
        Over the years, I’ve been honored to be known as one of{" "}
        <span className="text-gold font-semibold">
          Udaipur’s most trusted photographers
        </span>
        , delivering not just pictures but emotions you can feel — even years
        later.
      </motion.p>
    </div>
  );
}
