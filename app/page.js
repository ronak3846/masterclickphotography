"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  // Animated stats
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [awards, setAwards] = useState(0);

  useEffect(() => {
    const animateCount = (setter, target) => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setter(count);
        if (count >= target) clearInterval(interval);
      }, 40);
    };
    animateCount(setYears, 10);
    animateCount(setProjects, 120);
    animateCount(setAwards, 15);
  }, []);

  return (
    <div className="relative text-white overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative bg-black min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-white"
        >
          Capturing Timeless Moments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-lg md:text-xl text-gray-300"
        >
          By{" "}
          <span className="font-semibold text-yellow-400">Ajay Vaishnav</span> •
          Photographer & Videographer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 flex gap-4"
        >
          <Link href="/portfolio">
            <Button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform">
              View Portfolio
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition">
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className="bg-white text-black py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/profile.png"
              alt="Photographer Portrait"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">
              About Me
            </h2>
            <p className="leading-relaxed mb-4">
              Hi, I’m <span className="font-semibold">Ajay Vaishnav</span>, a
              passionate photographer with over{" "}
              <span className="text-yellow-400">10 years</span> of experience
              capturing life’s most precious moments.
            </p>
            <p className="leading-relaxed mb-6">
              My mission is to create timeless images filled with emotions,
              colors, and memories that last a lifetime.
            </p>
            <Link href="/portfolio">
              <Button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform">
                View My Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section className="bg-black text-white py-20 px-6 md:px-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Featured Gallery
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            Some of our favorite captured moments.
          </p>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
          {[
            "/images/img1.jpg",
            "/images/img2.jpg",
            "/images/img3.jpg",
            "/images/img4.jpg",
            "/images/img5.jpg",
            "/images/img6.jpg",
            "/images/img7.jpg",
            "/images/img8.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-lg break-inside-avoid"
            >
              <Image
                src={src}
                alt={`Gallery ${i}`}
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-yellow-400 text-lg font-semibold">
                  View More
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white text-black py-24 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-yellow-400">
          My Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Wedding Photography",
              desc: "Cinematic and timeless captures.",
              img: "/images/img3.jpg",
            },
            {
              title: "Event Coverage",
              desc: "Corporate, personal, and cultural events.",
              img: "/images/event.jpg",
            },
            {
              title: "Portrait Sessions",
              desc: "Expressive and stylish portraits.",
              img: "/images/img7.jpg",
            },
            {
              title: "Product Shoots",
              desc: "Vibrant product images for brands.",
              img: "/images/product.jpg",
            },
            {
              title: "Cinematic Videos",
              desc: "Storytelling through cinematic frames.",
              img: "/images/video.jpg",
            },
            {
              title: "Editing & Retouching",
              desc: "Professional post-production.",
              img: "/images/editing.jpg",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative w-full h-96 rounded-3xl shadow-2xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-200 mb-4 text-sm md:text-base">
                  {service.desc}
                </p>
                <Link href="https://wa.me/919887165654" target="_blank">
                  <Button className="px-5 py-2 bg-yellow-400 rounded-full text-black font-medium hover:scale-105 transition-transform">
                    Book Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black text-white py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Emma",
              feedback:
                "Absolutely stunning photos! Every emotion captured beautifully.",
            },
            {
              name: "Liam",
              feedback: "Professional and creative. Wedding shots are magical!",
            },
            {
              name: "Sophia",
              feedback:
                "Amazing experience, very comfortable during the shoot. Highly recommended!",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-white/5 shadow-lg"
            >
              <p className="text-gray-200 italic">“{t.feedback}”</p>
              <h3 className="mt-4 font-semibold text-white">- {t.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white text-black py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-12 text-yellow-400">
          My Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <motion.h3 className="text-6xl font-extrabold text-yellow-400">
              {years}+
            </motion.h3>
            <p>Years of Experience</p>
          </div>
          <div>
            <motion.h3 className="text-6xl font-extrabold text-yellow-400">
              {projects}+
            </motion.h3>
            <p>Projects Completed</p>
          </div>
          <div>
            <motion.h3 className="text-6xl font-extrabold text-yellow-400">
              {awards}+
            </motion.h3>
            <p>Awards Won</p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/919887165654"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="bg-yellow-400 p-4 rounded-full shadow-lg text-black"
        >
          <FaWhatsapp size={28} />
        </motion.div>
      </Link>
    </div>
  );
}
