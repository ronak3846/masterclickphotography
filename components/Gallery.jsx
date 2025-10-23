"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
  "/images/img10.jpg",
  "/images/img11.jpg",
  "/images/img12.jpg",
  "/images/img13.jpg",
  "/images/img14.jpg",
  "/images/img15.jpg",
  "/images/img16.jpg",
];

export default function Gallery() {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
      {images.map((src, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative w-full overflow-hidden rounded-sm break-inside-avoid shadow-lg"
        >
          <Image
            src={src}
            alt={`Portfolio ${i}`}
            width={500}
            height={600}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
