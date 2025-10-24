"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Wedding Photography",
    desc: "Capture your once-in-a-lifetime moments with elegance and emotion. From bridal portraits to the grand ceremony, we focus on every detail — the laughter, the tears, and the in-between moments.",
    includes: [
      "Pre-wedding shoot",
      "Wedding day coverage",
      "Candid & traditional photos",
      "Couple portraits",
      "Cinematic highlights",
      "Custom photo albums",
    ],
    image: "/images/img3.jpg",
  },
  {
    title: "Event Coverage",
    desc: "From corporate events to family celebrations, we provide seamless photo & video coverage that captures energy, atmosphere, and authenticity.",
    includes: [
      "Corporate and private events",
      "Live event photography",
      "Multi-camera setup",
      "Social-media-ready highlights",
      "Audience & stage coverage",
    ],
    image: "/images/event.jpg",
  },
  {
    title: "Portrait Sessions",
    desc: "Transform your look into timeless art. Our portrait sessions blend creative lighting, natural poses, and cinematic composition.",
    includes: [
      "Studio & outdoor portraits",
      "Model portfolios",
      "Family portraits",
      "Professional headshots",
      "Cinematic lighting setup",
    ],
    image: "/images/img7.jpg",
  },
  {
    title: "Product Shoots",
    desc: "High-quality product photography that showcases your brand’s identity and enhances your marketing visuals.",
    includes: [
      "E-commerce product photos",
      "Creative lifestyle shots",
      "White background photos",
      "Detailed macro photography",
    ],
    image: "/images/product.jpg",
  },
  {
    title: "Cinematic Videography",
    desc: "Every frame tells a story. We create cinematic films for weddings, brands, and events with rich visuals and emotional storytelling.",
    includes: [
      "Drone footage",
      "Slow-motion sequences",
      "Cinematic editing",
      "Teasers & trailers",
      "Professional color grading",
    ],
    image: "/images/video.jpg",
  },
  {
    title: "Editing & Retouching",
    desc: "We perfect every pixel with color correction, tone balancing, and detailed retouching while keeping the natural essence intact.",
    includes: [
      "Skin & background retouching",
      "HDR tone adjustments",
      "Cinematic color grading",
      "Album design assistance",
    ],
    image: "/images/editing.jpg",
  },
];

export default function ServicesPage() {
  const whatsappNumber = "919887165654"; // Change to your real WhatsApp number (with country code)
  const defaultMessage = "Hi Ajay! I’d like to book your photography service.";

  return (
    <section className="py-20 px-4 sm:px-8 md:px-20 bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
      >
        Photography Services
      </motion.h2>

      <div className="space-y-20">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8 md:gap-14`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative group">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-2xl shadow-2xl"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={500}
                  className="object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700 w-full h-[250px] sm:h-[350px] md:h-[400px]"
                />
              </motion.div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-purple-300">
                {service.title}
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {service.desc}
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm sm:text-base">
                {service.includes.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>

              {/* WhatsApp Button */}
              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  defaultMessage + " (" + service.title + ")"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-block mt-5 px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium transition-all shadow-lg shadow-green-500/20"
              >
                Book Now via WhatsApp
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
