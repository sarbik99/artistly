"use client";
import CategoryCard from "../components/CategoryCard";
import { motion } from "framer-motion";

const categories = [
  { label: "Singers", imageSrc: "/images/singer.png" },
  { label: "Dancers", imageSrc: "/images/dancer.png" },
  { label: "DJs", imageSrc: "/images/dj.png" },
  { label: "Speakers", imageSrc: "/images/speaker.png" },
];

export default function CategoryCards() {

  return (
    <section className="px-6 py-16 bg-white">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore Categories
      </motion.h2>
      <p className="text-center text-gray-600 mb-12">
        Discover artists across various categories and connect with their unique
        talents.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {categories.map((cat, index) => (
          <CategoryCard
            key={cat.label}
            imageSrc={cat.imageSrc}
            label={cat.label}
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
}
